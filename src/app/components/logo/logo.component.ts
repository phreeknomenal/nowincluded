import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() fillColor: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
