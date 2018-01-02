import { Component, OnInit ,AfterViewInit, AfterViewChecked, ElementRef} from '@angular/core';
import { AfterContentInit, AfterContentChecked } from '@angular/core/src/metadata/lifecycle_hooks';
//import * as $ from 'jquery';
//import 'foundation';
declare var jQuery : any;
//declare var foundation: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,AfterViewChecked {
  ngAfterViewChecked(): void {
    //console.log(jQuery(this.el.nativeElement.ownerDocument).foundation());
  }
  ngAfterViewInit(): void {
    //console.log(jQuery(document).foundation());
  }

  title = 'app';

 // constructor(public el: ElementRef){}
  ngOnInit(): void {
    /*$(".test").each( function() {
      alert("Your book is overdue.");
      
  });*/
  //Foundation.init(jQuery);
  //console.log(jQuery(document).foundation());
    //$(document).prop("hihi");
    jQuery(document).foundation();
  }
}
