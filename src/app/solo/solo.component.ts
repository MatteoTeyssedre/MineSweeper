import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { player } from '../player';

@Component({
  selector: 'app-solo',
  templateUrl: './solo.component.html',
  styleUrls: ['./solo.component.scss']
})
export class SoloComponent implements OnInit {
  player1: player = new player("1");
  gameStart = false;


  
  end(endGame: boolean) {
    this.gameStart = endGame;
  }

  constructor () {}

  ngOnInit(): void {
  }

  title = 'Demi';
}
