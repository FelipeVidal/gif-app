import { Component } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  
  public option:string='';

  constructor(private gifService:GifsService){}

  

  get gifs(){
    //debugger;
    return this.gifService.gifsList;
  }

  public optionSelected(option:string){
    this.option = option;
    if(option=="trending"){
      this.gifService.trendingGif();
    }
  }
}

