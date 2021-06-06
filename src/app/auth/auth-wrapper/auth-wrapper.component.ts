import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'auth-wrapper',
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AuthWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
