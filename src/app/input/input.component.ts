import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component, Input, OnInit, TemplateRef } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  @Input() inp: string;
  @Input() label;
  @Input() hint;
  @Input() template: TemplateRef<any>;
  @Input() values: string[];
  @Input() name: string;

  show: boolean = true;
  constructor() {}

  ngOnInit() {}

  toggle() {
    this.show = !this.show;
  }
}
