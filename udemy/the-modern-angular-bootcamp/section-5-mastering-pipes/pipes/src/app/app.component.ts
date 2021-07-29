import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0.0;
  height: number = 0.0;
  miles: number = 0.0;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onNameChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.name = target.value;
  }

  onDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.date = target.value;
  }

  onAmountChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.amount = parseFloat(target.value);
  }

  onHeightChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.height = parseFloat(target.value);
  }

  onMilesChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.miles = parseFloat(target.value);
  }
}
