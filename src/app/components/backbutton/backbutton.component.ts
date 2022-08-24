import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-component-backbutton',
  templateUrl: './backbutton.component.html',
  styleUrls: ['./backbutton.component.scss']
})
export class BackbuttonComponent implements OnInit {
  faChevronLeft = faChevronLeft
  
  constructor() { }

  ngOnInit(): void {
  }

}
