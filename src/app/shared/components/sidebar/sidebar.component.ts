import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public tagSelected: string = "";

  constructor(private gifService: GifsService){
  }

  get showTags(){
    return this.gifService.tagsHistory;
  }

  public selectTag(tag: string){
    this.tagSelected = tag;
    this.gifService.searchTag(this.tagSelected);
  }

}
