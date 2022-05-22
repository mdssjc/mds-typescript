import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit, OnDestroy {
  @Output() counterEvent = new EventEmitter<number>();

  interval: any;
  counter = 0;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.onStop();
  }

  onStart() {
    this.interval = setInterval(() => {
      this.counter++;
      this.counterEvent.emit(this.counter);
    }, 1000);
  }

  onStop() {
    this.counter = 0;
    clearInterval(this.interval);
  }
}
