import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toKHR'
})
export class ToKHRPipe implements PipeTransform {
  transform(amount: number): string {

    let res: number = amount * 4100;
    
    res = this.customRound(res);
    
    return res.toLocaleString() + '៛';
  }

  private customRound(value: number): number {
    const remainder = value % 100;
    
    if (remainder >= 50) {
      return value + (100 - remainder); 

    } else {
      return value - remainder;
    }
  }
}