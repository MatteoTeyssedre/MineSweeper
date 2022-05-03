import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { player } from '../player';

@Component({
  selector: 'app-duo',
  templateUrl: './duo.component.html',
  styleUrls: ['./duo.component.scss']
})
export class DuoComponent implements OnInit {

  constructor (private router:Router) {}

  goHome(){
      this.router.navigate(['']);
  }
  ngOnInit(): void {
  }

  title = 'Demi';
  player1!: player;
  player2!: player;
  gameStart = false;

  myData: player[] = [this.player1, this.player2];

  sendData(value: string) {
    this.player1 = new player(value[0]);
    this.player2 = new player(value[1]);
    this.player1.setScorePlayer(0);
    this.player2.setScorePlayer(0);
    this.gameStart = true;
  }

  end(endGame: boolean) {
    this.gameStart = endGame;
  }
}
