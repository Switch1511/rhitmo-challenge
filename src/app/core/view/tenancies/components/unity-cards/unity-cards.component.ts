import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unity-cards',
  templateUrl: './unity-cards.component.html',
  styleUrls: ['./unity-cards.component.scss']
})
export class UnityCardsComponent implements OnInit {

  cardList!: any[];

  constructor() { }

  ngOnInit(): void {
    this.cardList = [
      {
        name: "teste",
        address: "Rua arthur bernardes"
      },
      {
        name: "teste",
        address: "Rua arthur bernardes"
      },
      {
        name: "teste",
        address: "Rua arthur bernardes"
      },
      {
        name: "teste",
        address: "Rua arthur bernardes"
      },
      {
        name: "teste",
        address: "Rua arthur bernardes"
      },
    ]
  }

}
