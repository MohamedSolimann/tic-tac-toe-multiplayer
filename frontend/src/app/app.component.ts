import { Component } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  public gameIn1: string = '';
  public gameIn2: string = '';
  public gameIn3: string = '';
  public gameIn4: string = '';
  public gameIn5: string = '';
  public gameIn6: string = '';
  public gameIn7: string = '';
  public gameIn8: string = '';
  public gameIn9: string = '';
  public turns: number = 0;
  public toggleXO: boolean = false;
  public status: string = '';
  constructor() {}

  winConditions() {
    const {
      gameIn1,
      gameIn2,
      gameIn3,
      gameIn4,
      gameIn5,
      gameIn6,
      gameIn7,
      gameIn8,
      gameIn9,
      turns,
    } = this;
    let status;
    if (gameIn1 === gameIn2 && gameIn2 === gameIn3 && gameIn1 !== '')
      status = turns % 2 === 0 ? 'player 2 wins' : 'player 1 wins';
    if (gameIn1 === gameIn4 && gameIn4 === gameIn7 && gameIn1 !== '')
      status = turns % 2 === 0 ? 'player 2 wins' : 'player 1 wins';
    if (gameIn1 === gameIn5 && gameIn5 === gameIn9 && gameIn1 !== '')
      status = turns % 2 === 0 ? 'player 2 wins' : 'player 1 wins';
    if (gameIn2 === gameIn5 && gameIn5 === gameIn8 && gameIn2 !== '')
      status = turns % 2 === 0 ? 'player 2 wins' : 'player 1 wins';
    if (gameIn3 === gameIn5 && gameIn5 === gameIn7 && gameIn3 !== '')
      status = turns % 2 === 0 ? 'player 2 wins' : 'player 1 wins';
    if (gameIn3 === gameIn6 && gameIn6 === gameIn9 && gameIn3 !== '')
      status = turns % 2 === 0 ? 'player 2 wins' : 'player 1 wins';
    if (gameIn4 === gameIn5 && gameIn5 === gameIn6 && gameIn4 !== '')
      status = turns % 2 === 0 ? 'player 2 wins' : 'player 1 wins';
    if (gameIn7 === gameIn8 && gameIn8 === gameIn9 && gameIn7 !== '')
      status = turns % 2 === 0 ? 'player 2 wins' : 'player 1 wins';
    return status;
  }
  play(event: any) {
    let xo;
    if (this.turns < 9 && !this.status) {
      if (this.toggleXO) {
        xo = 'x';
      } else {
        xo = 'o';
      }
      this.toggleXO = !this.toggleXO;
      if (event.target.id === '1') this.gameIn1 = xo;
      if (event.target.id === '2') this.gameIn2 = xo;
      if (event.target.id === '3') this.gameIn3 = xo;
      if (event.target.id === '4') this.gameIn4 = xo;
      if (event.target.id === '5') this.gameIn5 = xo;
      if (event.target.id === '6') this.gameIn6 = xo;
      if (event.target.id === '7') this.gameIn7 = xo;
      if (event.target.id === '8') this.gameIn8 = xo;
      if (event.target.id === '9') this.gameIn9 = xo;
      this.turns++;
    }
  }
  checkCondtions() {
    let status;
    if (this.turns > 3) {
      status = this.winConditions();
      if (status) {
        this.status = status;
      }
    }
    if (this.turns >= 9 && status === undefined) {
      this.status = 'draw,Play Again';
    }
  }
  restart() {
    this.gameIn1 = '';
    this.gameIn2 = '';
    this.gameIn3 = '';
    this.gameIn4 = '';
    this.gameIn5 = '';
    this.gameIn6 = '';
    this.gameIn7 = '';
    this.gameIn8 = '';
    this.gameIn9 = '';
    this.turns = 0;
    this.toggleXO = false;
    this.status = '';
  }
}
