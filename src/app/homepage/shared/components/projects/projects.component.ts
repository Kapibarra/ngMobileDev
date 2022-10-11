import { Component, OnInit } from '@angular/core';

interface Projects {
  title: string,
  description: string,
  activeTab: string,
  isActive: boolean
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
isOpened: boolean = false;
activeIndex: number = 1;
projects:Projects[] = [
  {
    title: 'Project 1',
    description: 'Project 1 description',
    activeTab: 'games',
    isActive: true
  },
  {
    title: 'Project 1',
    description: 'Project 1 description',
    activeTab: 'games2',
    isActive: false
  },
  {
    title: 'Project 1',
    description: 'Project 1 description',
    activeTab: 'games3',
    isActive: false
  },
  {
    title: 'Project 1',
    description: 'Project 1 description',
    activeTab: 'games4',
    isActive: false
  },
  {
    title: 'Project 1',
    description: 'Project 1 description',
    activeTab: 'games5',
    isActive: false
  },
]

  activeTab: string = 'games';
  constructor() { }

  ngOnInit(): void {
  }
  showProject(project:Projects) {
  this.projects.forEach(project => project.isActive = false); 
  project.isActive = true;
  }
}
