import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  @Input()
  public rating: number;
  public starting: Array<boolean>;
  constructor() { }

  ngOnInit() {
  this.starting = [];
  for (let i = 1 ; i <= 5; i++) {
      this.starting.push(i > this.rating);
  }
  }

}
