import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class PipePipe implements PipeTransform {

  
  transform(value:any,leng:number=80,suf:string='...' ):any {
    return value.substring(0,leng)+(value.length> leng ? suf :'');
  }

  
}
