import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  @Input() pages: any = [];
  xss = '<img src="javascript:alert(123)" />';

  constructor() {}

  ngOnInit(): void {}
}
