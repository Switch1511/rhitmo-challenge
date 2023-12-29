import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenancies',
  templateUrl: './tenancies.component.html',
  styleUrls: ['./tenancies.component.scss'],
  animations: [
    trigger('fadeInOut',[
      transition(':enter', [
        style({opacity: 0}),
        animate('0.2s', style({opacity: 1}))
      ])
    ])
  ]
})
export class TenanciesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
