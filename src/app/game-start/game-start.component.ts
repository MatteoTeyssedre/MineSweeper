import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Router } from '@angular/router';
import { MatrixService } from '../matrix.service';
import {
  player
} from '../player';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.scss']
})
export class GameStartComponent implements OnInit {
  matrix: number[][] = this.matrixService.getMatrix();
  coordMine!: number[][];
  nextPlayer: boolean = false;
  gameStart: number = 0;
  score: number = 0;
  interval: any;

  constructor(private matrixService: MatrixService, private router:Router ) {}

  @Input()
  Data: player[] = [];
  
  @Input()
  Solo!: boolean;

  @Output()
  sendEndGameToFather = new EventEmitter();

  returnTheEndToFather() {
    this.sendEndGameToFather.emit(false);
  }

  ngOnInit(): void {
    this.startGame();
  }

  goHome(){
    this.router.navigate(['']);
  }


  startTimer() {
    this.interval = setInterval(() => {
      this.score++;
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  startGame() {
    this.gameStart = 1;
    this.startTimer();
  }

  endGame() {
    if (this.Data[0].getScorePlayer() < this.Data[1].getScorePlayer()) {
      alert(`${this.Data[0].getNamePlayer()} win, score: ${this.Data[0].getScorePlayer()}`);
    } else if (this.Data[0].getScorePlayer() > this.Data[1].getScorePlayer()) {
      alert(`${this.Data[1].getNamePlayer()} win, score: ${this.Data[1].getScorePlayer()}`);
    } else {
      alert("Draw");
    }
    this.returnTheEndToFather();
  }

  endGameSolo() {
    alert(`score: ${this.Data[0].getScorePlayer()}`);
    this.returnTheEndToFather();
  }

  restartGame() {
    this.score = 0;
    this.pauseTimer();
    this.startGame();
    this.matrix = this.matrixService.createMatrix();
    if(!this.Solo){
      this.nextPlayer = true;
    }
  }

  looseGame() {
    this.showAll();
    this.pauseTimer();
    this.score = 8888;
    if ( !this.nextPlayer ){
      this.Data[0].setScorePlayer(this.score);
      this.gameStart = 0;
    }else{
      this.Data[1].setScorePlayer(this.score);
    }
    this.gameStart = 0;
    alert("Looser !!!");
  }

  winGame() {
    this.showAll();
    this.pauseTimer();
    if ( !this.nextPlayer ){
      this.Data[0].setScorePlayer(this.score);
      this.gameStart = 0;
    }else{
      this.Data[1].setScorePlayer(this.score);
      this.endGame();
    }
  }
  checkWin() {
    let win = true;
    for (let i = 0; i < this.matrixService.getCoordMine().length; i++) {
      if (this.matrixService.getCoordMine()[i][2] === 0) {
        win = false;
      }
    }
    return win;
  }

  showAll() {
    for (let i = 0; i < 18; i++) {
      for (let j = 0; j < 18; j++) {
        const block = document.getElementById(`card${i}-${j}`);
        if (block) {
          switch (this.matrix[i][j]) {
            case 666:
              block.classList.add('mine');
              break;
            case 0:
              block.classList.add('zero');
              break;
            case 1:
              block.classList.add('one');
              break;
            case 2:
              block.classList.add('two');
              break;
            case 3:
              block.classList.add('three');
              break;
            case 4:
              block.classList.add('four');
              break;
            case 5:
              block.classList.add('five');
              break;
            case 6:
              block.classList.add('six');
              break;
            case 7:
              block.classList.add('seven');
              break;
            case 8:
              block.classList.add('eight');
              break;
          }
        }
      }
    }
  }
  check(input: number, i: number, j: number) {
    switch (input) {
      case 666:
        this.looseGame();
        break;
      case 0:
        this.matrixService.checkNeighborsToClose(i, j, 0);
        break;
      case 1:
        const one = document.getElementById(`card${i}-${j}`);
        if (one) {
          one.classList.add('one');
        }
        break;
      case 2:
        const two = document.getElementById(`card${i}-${j}`);
        if (two) {
          two.classList.add('two');
        }
        break;
      case 3:
        const three = document.getElementById(`card${i}-${j}`);
        if (three) {
          three.classList.add('three');
        }
        break;
      case 4:
        const four = document.getElementById(`card${i}-${j}`);
        if (four) {
          four.classList.add('four');
        }
        break;
      case 5:
        const five = document.getElementById(`card${i}-${j}`);
        if (five) {
          five.classList.add('five');
        }
        break;
      case 6:
        const six = document.getElementById(`card${i}-${j}`);
        if (six) {
          six.classList.add('six');
        }
        break;
      case 7:
        const seven = document.getElementById(`card${i}-${j}`);
        if (seven) {
          seven.classList.add('seven');
        }
        break;
      case 8:
        const eight = document.getElementById(`card${i}-${j}`);
        if (eight) {
          eight.classList.add('eight');
        }
        break;
      default:
        break;
    }

  }

  flag(input: number, i: number, j: number) {
    const flag = document.getElementById(`card${i}-${j}`);
    if (flag) {
      if (flag.classList.contains("flag")) {
        flag.classList.remove("flag");
      } else {
        flag.classList.add("flag");
      }

      for (let k = 0; k < this.matrixService.getCoordMine().length; k++) {
        if (i === this.matrixService.getCoordMine()[k][0] && j === this.matrixService.getCoordMine()[k][1]) {
          this.matrixService.getCoordMine()[k][2] = 1;
        }
      }
      if (this.checkWin() === true) {
        this.winGame();
      }

    }
    return false;
  }
}
