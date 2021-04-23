import { Component, OnInit } from "@angular/core";
let time = 0;
@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  num = 0;
  constructor() {
    time += 1;
    this.num = time;
  }

  ngOnInit() {}
}
