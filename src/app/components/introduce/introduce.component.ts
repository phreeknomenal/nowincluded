import { Component, OnInit } from '@angular/core';
import { Profile } from '../../Profiles'
import { PROFILES } from 'src/app/mock-profiles';

@Component({
  selector: 'app-component-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {
  profiles: Profile[] = PROFILES;

  constructor() { }

  ngOnInit(): void {
  }

}
