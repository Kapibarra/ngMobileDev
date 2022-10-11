import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accorion-item',
  templateUrl: './accorion-item.component.html',
  animations:[
    trigger('smoothCollapse', [
      state('initial' ,style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('final',style({
        overflow: 'hidden',
      })),
      transition('initial<=>final', animate('250ms'))
    ]),
    trigger('rotatedState', [
      state('default' ,style({
transform: 'rotate(0)',
filter: 'brightness(1)'
      })),
      state('rotated' ,style({
        transform: 'rotate(90deg)',
        filter: 'brightness(1.5)'
      })),
      transition('default<=>rotated', animate('250ms'))
    ])
  ],
  styleUrls: ['./accorion-item.component.scss']
})
export class AccorionItemComponent implements OnInit {
  @Input() title: string = 'test title'
  showBody = false
  constructor() { }

  ngOnInit(): void {
  }
  toggleAccordion() {
    this.showBody = !this.showBody;
  }  
}
