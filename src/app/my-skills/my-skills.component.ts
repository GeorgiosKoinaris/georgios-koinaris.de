import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  icons = [
    './assets/img/skills/angular.png',
    './assets/img/skills/typescript.png',
    './assets/img/skills/javascript.png',
    './assets/img/skills/html.png',
    './assets/img/skills/firebase.png',
    './assets/img/skills/git.png',
    './assets/img/skills/css.png',
    './assets/img/skills/api.png',
    './assets/img/skills/scrum.png',
    './assets/img/skills/material-design.png',
  ]
  iconTexts = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'Firebase',
    'GIT',
    'CSS',
    'Rest-Api',
    'Scrum',
    'Material design'
  ]
}
