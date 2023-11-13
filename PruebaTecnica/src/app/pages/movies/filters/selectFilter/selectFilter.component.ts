import { Component, OnInit, Input, TemplateRef,  } from '@angular/core';

@Component({
  selector: 'app-selectFilter',
  templateUrl: './selectFilter.component.html',
  styleUrls: ['./selectFilter.component.css'],
})
export class SelectFilterComponent implements OnInit {
  // @Input() array: string[] = [];
  @Input() openIcon:string = 'fa fa-plus';
  @Input() closeIcon:string = 'fa fa-minus';
  @Input() title:string = '';
  @Input() titleRef!: TemplateRef<any>;
  @Input() showBorder:boolean = true;
  isVisible = true;
  constructor() {}

  ngOnInit() {}

  // select(row: string) {
  //   this.selectEmit.emit(row);
  // }
}
