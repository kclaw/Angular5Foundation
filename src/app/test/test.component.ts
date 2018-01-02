import { Component, OnInit, AfterViewInit, ElementRef, AfterViewChecked } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit, AfterViewChecked {
  ngAfterViewChecked(): void {
    //jQuery('#test').foundation();
  }

  constructor(public el: ElementRef) { }

  ngOnInit() {
    $(document).foundation();
  }
  ngAfterViewInit() {
    //jQuery(this.el.nativeElement).foundation();
}
}
