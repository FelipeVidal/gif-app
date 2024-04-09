import { Component, Input } from '@angular/core';
import { Gif } from '../../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-cart-list',
  templateUrl: './cart-list.component.html',
})
export class CartListComponent {
  @Input()
  public gifs: Gif[] = [];
}
