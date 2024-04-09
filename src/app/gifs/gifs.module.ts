import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CartListComponent } from './components/cart-list/cart-list/cart-list.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CartListComponent,
    GifCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
