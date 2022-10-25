import { Component, OnInit } from '@angular/core';

interface Projects {
  title: string,
  description: string,
  activeTab: string,
  isActive: boolean,
  src: string,
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
isOpened: boolean = false;
activeIndex: number = 1;
selectedProject?: Projects ;
activeClass!:boolean
projects:Projects[] = [
  {
    title: 'iGaming',
    description: 'Well-designed and handy apps for fast-paced, innovative and ever-growing young industry',
    activeTab: 'games',
    isActive: true,
    src: 'assets/project01.png',
  },
  {
    title: 'Finance',
    description: 'Apps with stock trading signals and financial recommendations',
    activeTab: 'finance',
    isActive: false,
    src: 'assets/project02.png',
  },
  {
    title: 'Dating',
    description: 'User-friendly apps to match & meet',
    activeTab: 'dating',
    isActive: false,
    src: 'assets/project03.png',
  },
  {
    title: 'Astrology',
    description: 'Personalized horoscope, compatibility meter, astrological events that help navigate your relationships',
    activeTab: 'astro',
    isActive: false,
    src: 'assets/project04.png',
  },
  {
    title: 'VPN',
    description: 'Secure VPN apps to stay private online',
    activeTab: 'vpn',
    isActive: false,
    src: 'assets/project05.png',
  },
]

  constructor() { }

  ngOnInit(): void {
    this.selectedProject = this.projects[0]
  }
  showProject(project:Projects) {
  this.projects.forEach(project => project.isActive = false); 
  project.isActive = true;
  this.selectedProject = project
  }
}
