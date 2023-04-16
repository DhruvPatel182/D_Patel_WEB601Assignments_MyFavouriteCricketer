import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { ContentListComponent } from './content-list/content-list.component';
@Pipe({
  name: 'playerTypeEdit'
})
export class PlayerTypeEditPipe implements PipeTransform {

  transform(CricketerName: Content[], optionalType?: string): Content[] {
    return CricketerName.filter(CricketerName => CricketerName?.type == optionalType ? CricketerName : null)
  }
}

