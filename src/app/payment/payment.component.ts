import {Component, HostListener, OnInit} from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { SnackbarService } from '../shared/services/snackbar.service';
import { User } from '../shared/models/user.model';
import { BitcoinValue } from '../shared/helpers/bitcoin-cours.constanc';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  user: User;
  billValue = 0;
  activeStep = 1;
  timeout;
  link = '';
  numbers = /^[0-9]+$/;

  bitcoinValue = BitcoinValue;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.numbers.test(event.key)) {
      this.onKeyboardButtonPress(Number(event.key));
    } else if (event.key === 'Enter') {
      this.onPayButtonPress();
    }
  }

  constructor(private userService: UserService,
              private snackbar: SnackbarService) { }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
    console.log(this.user);
  }

  onClearButtonPress() {
   this.billValue = 0;
  }

  onKeyboardButtonPress(keyNumber: number): void {
    if (this.billValue === 0 && keyNumber === 0) {
      return;
    }
    this.billValue = Number(`${this.billValue}${keyNumber}`);
  }

  onPayButtonPress(): void {
    if (this.billValue <= 0) {
      this.snackbar.openSnackBar('Morate uneti iznos racuna da biste bili u mogucnosti da platite', 'error-snackbar');
    } else if (this.user.bitcoins > this.billValue / this.bitcoinValue) {
      this.createUrl();
      this.timeout = setTimeout(() => this.onPaymentSuccess(),
        10000);
      this.activeStep = 2;
    }  else {
      this.snackbar.openSnackBar('Nemate dovoljno bitkoina za ovu transakciju', 'error-snackbar');
    }
  }

  onPaymentSuccess(): void {
    this.snackbar.openSnackBar('Placanje je uspesno', 'success-snackbar');
    this.userService.updateUsersProfile(this.user, this.billValue, this.billValue / this.bitcoinValue);
    this.activeStep = 3;
  }

  onStopPayment(): void {
    this.activeStep = 1;
    clearInterval(this.timeout);
  }

  goToNewTransaction() {
    this.activeStep = 1;
    this.billValue = 0;
    this.link = '';
  }

  createUrl(): void {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    for (let i = 0; i < 30; i++) {
      this.link += possible.charAt(Math.floor(Math.random() * possible.length));
    }
  }
}
