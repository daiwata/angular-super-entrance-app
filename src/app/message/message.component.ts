import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MycheckService } from '../mycheck.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  input:FormControl;
  message:string;

  constructor(private service:MycheckService) { }

  ngOnInit(): void {
    this.input = new FormControl('');
    this.message = 'mydata list.';
  }

  getData() {
    return this.service.data;
  }

  getList() {
    return this.service.list;
  }

  doAction() {
    let n = parseInt(this.input.value);
    let p = this.service.get(n);
    this.message = JSON.stringify(p);
  }

}
