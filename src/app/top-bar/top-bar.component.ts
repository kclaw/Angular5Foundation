import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @HostBinding('class.top-bar') topbar: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
