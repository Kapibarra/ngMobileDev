import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  activeTab: string = 'apps';
  constructor() { }

  ngOnInit(): void {
  }
  onTabCLick(tab: any) {
    this.activeTab = tab;
  }
}
