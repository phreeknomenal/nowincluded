import { Component, OnInit } from '@angular/core';
import { PROFILES } from 'src/app/mock-profiles';
import { Profile } from 'src/app/Profiles';

@Component({
  selector: 'app-component-contact-intro',
  templateUrl: './contact-intro.component.html',
  styleUrls: ['./contact-intro.component.scss']
})
export class ContactIntroComponent implements OnInit {
  
  profiles: Profile[] = PROFILES;

  constructor() { }

  ngOnInit(): void {
  }

}
