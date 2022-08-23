import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input() progress: string | undefined
  
  constructor() { }

  ngOnInit(): void {
  }

}
