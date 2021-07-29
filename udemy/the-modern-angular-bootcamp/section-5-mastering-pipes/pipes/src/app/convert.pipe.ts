import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, ...args: number[]): any {
    return value ? value * 1.60934 : '';
  }
}
