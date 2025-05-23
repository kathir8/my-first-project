import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';
@Pipe({
    name: 'moment',
    standalone: false
})
export class MomentPipe implements PipeTransform {

  transform(value: any, format: string): any {
    return moment(value).format(format);
  }

}
@Pipe({
    name: 'filter'
    // pure:false
    ,
    standalone: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, field: string, filterValue: string): any {
    if (value && value.length > 0) {
      return value.filter((x: { [key: string]: any }) => x[field] === filterValue)
    }
    return []
  }

}
