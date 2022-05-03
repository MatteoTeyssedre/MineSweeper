import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-player',
  templateUrl: './form-player.component.html',
  styleUrls: ['./form-player.component.scss']
})
export class FormPlayerComponent implements OnInit {

  myData!: string[];

  constructor() { }

  @Output()
  sendRequestToFather = new EventEmitter();

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm) {
    this.myData = [form.value.Player1, form.value.Player2];
    this.sendRequestToFather.emit(this.myData);
  }
}
