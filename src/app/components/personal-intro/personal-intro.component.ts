import { Component, OnInit } from '@angular/core';
import { PROFILES } from 'src/app/mock-profiles';
import { Profile } from 'src/app/Profiles';

@Component({
  selector: 'app-component-personal-intro',
  templateUrl: './personal-intro.component.html',
  styleUrls: ['./personal-intro.component.scss']
})
export class PersonalIntroComponent implements OnInit {
  profiles: Profile[] = PROFILES;

  constructor() { }

  ngOnInit(): void {
  }

}
