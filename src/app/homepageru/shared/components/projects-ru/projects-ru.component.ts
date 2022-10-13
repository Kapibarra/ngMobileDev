import { Component, OnInit } from '@angular/core';

interface Projects {
  title: string,
  description: string,
  activeTab: string,
  isActiveru: boolean,
  src: string,
}
@Component({
  selector: 'app-projects-ru',
  templateUrl: './projects-ru.component.html',
  styleUrls: ['./projects-ru.component.scss']
})
export class ProjectsRuComponent implements OnInit {
isOpened: boolean = false;
activeIndex: number = 1;
selectedProject?: Projects ;
activeClass!:boolean
projects:Projects[] = [
  {
    title: 'iGaming',
    description: 'Well-designed and handy apps for fast-paced, innovative and ever-growing young industry',
    activeTab: 'games',
    isActiveru: true,
    src: 'assets/project01.png',
  },
  {
    title: 'Finance',
    description: 'Practical apps with stock trading signals and financial recommendations',
    activeTab: 'finance',
    isActiveru: false,
    src: 'assets/project02.png',
  },
  {
    title: 'Dating',
    description: 'User-friendly apps to match & meet',
    activeTab: 'dating',
    isActiveru: false,
    src: 'assets/project03.png',
  },
  {
    title: 'Astrology',
    description: 'Personalized horoscope, compatibility meter, astrological events that help navigate your relationships',
    activeTab: 'astro',
    isActiveru: false,
    src: 'assets/project04.png',
  },
  {
    title: 'VPN',
    description: 'Secure VPN apps to stay private online',
    activeTab: 'vpn',
    isActiveru: false,
    src: 'assets/project05.png',
  },
]

  constructor() { }

  ngOnInit(): void {
    this.selectedProject = this.projects[0]
  }
  showProject(project:Projects) {
  this.projects.forEach(project => project.isActiveru = false); 
  project.isActiveru = true;
  this.selectedProject = project
  }
}
