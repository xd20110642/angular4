import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(list: any[], filterField: any, keyword: string): any {
    if (!filterField || !keyword) {
      return list;
    }

    return list.filter((item) => {
      let fiedlValue = item[filterField];
      console.log(fiedlValue.indexOf(keyword) >= 0);
      return fiedlValue.indexOf(keyword) >= 0 ;

    });
  }

}
