import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(list: any[], filterFiled?: string, keyword?: string): any {
    if (!filterFiled || !keyword) {
      return list;
    }

    return list.filter((item) => {
      const filedValue = item[filterFiled];
      return filedValue.indexOf(keyword) >= 0;
    });
  }

}
