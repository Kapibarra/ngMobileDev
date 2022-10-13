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
    description: 'Качественные и удобные приложения для динамичной и инновационной молодой отрасли',
    activeTab: 'games',
    isActiveru: true,
    src: 'assets/project01.png',
  },
  {
    title: 'Финансы',
    description: 'Приложения со встроенными биржевыми торговыми сигналами и финансовыми рекомендациями',
    activeTab: 'finance',
    isActiveru: false,
    src: 'assets/project02.png',
  },
  {
    title: 'Знакомства',
    description: 'Удобные приложения для поиска друзей и свиданий ',
    activeTab: 'dating',
    isActiveru: false,
    src: 'assets/project03.png',
  },
  {
    title: 'Астрология',
    description: 'Персональные гороскопы, совместимость, астрологические события, которые помогут разобраться в ваших отношениях',
    activeTab: 'astro',
    isActiveru: false,
    src: 'assets/project04.png',
  },
  {
    title: 'VPN',
    description: 'Надежные VPN сервисы, которые позволяют сохранять анонимность в сети',
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
