import { trigger, transition, style,animate,state} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-ru',
  templateUrl: './about-ru.component.html',
  styleUrls: ['./about-ru.component.scss'],
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
})
export class AboutRuComponent implements OnInit {
  activeTab: string = 'apps';
  constructor() { }

  ngOnInit(): void {
  }
  onTabCLick(tab: any) {
    this.activeTab = tab;
  }
}
