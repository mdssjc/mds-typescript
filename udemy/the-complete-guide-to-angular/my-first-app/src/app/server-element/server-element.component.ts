import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  @Input()
  element: { type: string; name: string; content: string };
  @ViewChild('heading') header: ElementRef;
  @ContentChild('paragraphContent') paragraph: ElementRef;

  constructor() {}

  ngOnInit(): void {
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log(
      'Text content of paragraph: ' + this.header.nativeElement.textContent
    );
  }
}
