import { Component, OnInit } from '@angular/core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-component-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  faChevronLeft = faChevronLeft

  constructor() { }

  ngOnInit(): void {
    
  }
  

}
