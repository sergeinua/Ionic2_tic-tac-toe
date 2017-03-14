import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Game page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
    field: {
        first: string,
        second: string,
        third: string,
        fourth: string,
        fifth: string,
        sixth: string,
        seventh: string,
        eighth: string,
        ninth: string
    };
    activePlayer: {
        id: number,
        legend: string,
        title: string,
        description: string
    };
    xPlayer: {
        id: number,
        legend: string,
        title: string,
        description: string
    };
    oPlayer: {
        id: number,
        legend: string,
        title: string,
        description: string
    };
    gameIsActive: boolean;
    winner: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.field = {
            first: null,
            second: null,
            third: null,
            fourth: null,
            fifth: null,
            sixth: null,
            seventh: null,
            eighth: null,
            ninth: null
        };
        this.xPlayer = {
            id: 1,
            legend: 'X',
            title: 'Player 1',
            description: 'Player 1 marks his fields with X'
        };
        this.oPlayer = {
            id: 2,
            legend: 'O',
            title: 'Player 2',
            description: 'Player 2 marks his fields with O'
        };
        this.activePlayer = this.xPlayer;
        this.gameIsActive = true;
        this.winner = null;
    }

    ngOnInit() {

    }

    ionViewDidLoad() {

    }

    changeActivePlayer() {
        if (this.gameIsActive) {
            if (this.activePlayer.id == 1) {
                this.activePlayer = this.oPlayer;
            } else {
                this.activePlayer = this.xPlayer;
            }
        }
    }

    handleProcess(fieldItem, legend) {
        if (this.gameIsActive && !(this.field[fieldItem])) {
            this.field[fieldItem] = legend;
            if (this.detectWinner()) {
                this.gameIsActive = false;
                alert(this.activePlayer.title+'wins');
            }

            this.changeActivePlayer();
        }
    }

    detectWinner() {
        if (this.field.first =='X' && this.field.second =='X' && this.field.third =='X' ||
            this.field.first =='O' && this.field.second=='O' && this.field.third =='O')
            return true;
        if (this.field.fourth =='X' && this.field.fifth =='X' && this.field.sixth =='X' ||
            this.field.fourth =='O' && this.field.fifth =='O' && this.field.sixth =='O')
            return true;
        if (this.field.seventh =='X' && this.field.eighth =='X' && this.field.ninth =='X' ||
            this.field.seventh =='O' && this.field.eighth =='O' && this.field.ninth =='O')
            return true;
        if (this.field.first =='X' && this.field.fourth =='X' && this.field.seventh =='X' ||
            this.field.first =='O' && this.field.fourth =='O' && this.field.seventh =='O')
            return true;
        if (this.field.second =='X' && this.field.fifth =='X' && this.field.eighth =='X' ||
            this.field.second =='O' && this.field.fifth =='O' && this.field.eighth =='O')
            return true;
        if (this.field.third =='X' && this.field.sixth =='X' && this.field.ninth =='X' ||
            this.field.third =='O' && this.field.sixth =='O' && this.field.ninth =='O')
            return true;
        if (this.field.first =='X' && this.field.fifth =='X' && this.field.ninth =='X' ||
            this.field.first =='O' && this.field.fifth =='O' && this.field.ninth =='O')
            return true;
        if (this.field.third =='X' && this.field.fifth =='X' && this.field.seventh =='X' ||
            this.field.third =='O' && this.field.fifth =='O' && this.field.seventh =='O')
            return true;
        if (this.field.first && this.field.second && this.field.third && this.field.fourth &&
            this.field.fifth && this.field.sixth && this.field.seventh && this.field.eighth && this.field.ninth)
            return true;
        return false;
    }



}
