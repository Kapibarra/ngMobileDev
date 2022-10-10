import { trigger, transition, style,animate,state} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  animations: [
    trigger('Opacity', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('350ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('350ms', style({ opacity: 0 }))
      ])
    ]),
  ],
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
