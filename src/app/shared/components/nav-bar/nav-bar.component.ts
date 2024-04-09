import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {



  @Output()
  public option: EventEmitter<string> = new EventEmitter;
  
  public searchOption(optionSelected:string){
    this.option.emit(optionSelected)
  }

}
