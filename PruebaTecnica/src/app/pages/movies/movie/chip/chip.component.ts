import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {
  @Input() name!:string;
  @Output() closeEmit = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closeEmit.emit(this.name);
  }

}
