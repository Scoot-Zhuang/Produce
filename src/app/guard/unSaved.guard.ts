import {CanDeactivate} from '@angular/router';
import {ProductComponent} from '../product/product.component';

export class UnSavedGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent) {
    return window.confirm('are you sure leave?');
  }
}
