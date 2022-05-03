import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {
  matrix: number[][] = this.createMatrix();
  coordMine!: number[][];
  constructor() {}

  getCoordMine() {
    return this.coordMine;
  }

  getMatrix(){
    return this.matrix;
  }

  createMatrix() {
    this.matrix = [];
    for (let i = 0; i < 18; i++) {
      this.matrix[i] = new Array(18);
    }
    for (let i = 0; i < 18; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < 18; j++) {
        if (Math.random() < 0.13) {
          this.matrix[i][j] = 666;
          if (this.coordMine === undefined) {
            this.coordMine = [
              [i, j, 0]
            ];
          } else {
            this.coordMine[this.coordMine.length] = [i, j, 0];
          }
        } else {
          this.matrix[i][j] = 0;
        }
      }
    }
    this.updateMatrix();
    return this.matrix;
  }

  checkNeighbors(i: number, j: number, numberChecked: number) {

    let count = 0;
    if (i - 1 != -1) {
      if (this.matrix[i - 1][j] === numberChecked) {
        count++;
      }
    }
    if (i - 1 != -1 && j + 1 != 18) {
      if (this.matrix[i - 1][j + 1] === numberChecked) {
        count++;
      }
    }
    if (j - 1 != -1) {
      if (this.matrix[i][j - 1] === numberChecked) {
        count++;
      }
    }
    if (i + 1 != 18 && j - 1 != -1) {
      if (this.matrix[i + 1][j - 1] === numberChecked) {
        count++;
      }
    }

    if (j - 1 != -1 && i - 1 != -1) {
      if (this.matrix[i - 1][j - 1] === numberChecked) {
        count++;
      }
    }
    if (j + 1 != 18) {
      if (this.matrix[i][j + 1] === numberChecked) {
        count++;
      }
    }
    if (i + 1 != 18) {
      if (this.matrix[i + 1][j] === numberChecked) {
        count++;
      }
    }
    if (i + 1 != 18 && j + 1 != 18) {
      if (this.matrix[i + 1][j + 1] === numberChecked) {
        count++;
      }
    }
    return count;
  }

  checkNeighborsToClose(i: number, j: number, numberChecked: number) {
    const card = document.getElementById(`card${i}-${j}`);
    if (card) {
      card.classList.add("zero");
      if (i - 1 != -1) {
        const cardMore = document.getElementById(`card${i- 1}-${j}`);
        this.addClass(cardMore, numberChecked, i - 1, j);
      }
      if (j - 1 != -1) {
        const cardMore = document.getElementById(`card${i}-${j- 1}`);
        this.addClass(cardMore, numberChecked, i, j - 1);
      }
      if (i + 1 != 18) {
        const cardMore = document.getElementById(`card${i+ 1}-${j}`);
        this.addClass(cardMore, numberChecked, i + 1, j);
      }
      if (j + 1 != 18) {
        const cardMore = document.getElementById(`card${i}-${j+ 1}`);
        this.addClass(cardMore, numberChecked, i, j + 1);
      }
      if (j + 1 != 18 && i + 1 != 18) {
        const cardMore = document.getElementById(`card${i+ 1}-${j+ 1}`);
        this.addClass(cardMore, numberChecked, i + 1, j + 1);
      }
      if (j - 1 != -1 && i + 1 != 18) {
        const cardMore = document.getElementById(`card${i+ 1}-${j- 1}`);
        this.addClass(cardMore, numberChecked, i + 1, j - 1);
      }
      if (j - 1 != -1 && i - 1 != -1) {
        const cardMore = document.getElementById(`card${i- 1}-${j- 1}`);
        this.addClass(cardMore, numberChecked, i-  1, j - 1);
      }
      if (j + 1 != 18 && i - 1 != -1) {
        const cardMore = document.getElementById(`card${i- 1}-${j+ 1}`);
        this.addClass(cardMore, numberChecked, i - 1, j + 1);
      }
    }
  }

  updateMatrix() {
    let count
    for (let i = 0; i < 18; i++) {
      for (let j = 0; j < 18; j++) {
        if (this.matrix[i][j] === 0) {
          count = this.checkNeighbors(i, j, 666);
          if (count > 0) {
            this.matrix[i][j] = count;
          }
        }
      }
    }
  }

  addClass(cardMore: HTMLElement | null, numberChecked: number, i: number, j: number) {
    if (cardMore) {
      switch (this.matrix[i][j]) {
        case 0:
          if (!cardMore.classList.contains("zero")) {
            this.checkNeighborsToClose(i, j, numberChecked);
          }
          break;
        case 1:
          cardMore.classList.add("one");
          break;
        case 2:
          cardMore.classList.add("two");
          break;
        case 3:
          cardMore.classList.add("three");
          break;
        case 4:
          cardMore.classList.add("four");
          break;
        case 5:
          cardMore.classList.add("five");
          break;
        case 6:
          cardMore.classList.add('six');
          break;
        default:
          break;
      }
    }
  }

}


