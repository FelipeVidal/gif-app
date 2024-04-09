import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { TrendingGif } from '../interfaces/gifsTrending';


@Injectable({
  providedIn: 'root' //Con "provideIn:root" hacemos que el servicio esté disponible en TODOS los módulo que inyecten el servicio.
})
export class GifsService {

  public gifsList: Gif[] = [];

  private _tagsHistory: string[] = [];

  private apiKey: string = 'njAWrGmVRAS289RiZiPt1tWQNJtfhyC6';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory(){
    console.log("tagHistory")
    return [...this._tagsHistory]; //Los arreglos en JavaScript pasan por referencias. Utilizando el operador Spread(...) creamos una copia del arreglo, copiando los valores pero no las referencias.
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();
    
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory  = this._tagsHistory.filter((oldTag)=>oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory.splice(10);

    this.saveLocalStorage();
  }

  // async searchTag(tag: string):Promise<void>{

  //   if(tag.length === 0) return;

  //   this.organizeHistory(tag);

  //   fetch('https://api.giphy.com/v1/gifs/search?api_key=ArVVxS1R0DabKBzgwQRqh7525XZ09lIj&q=valorant&limit=10')
  //     .then(resp => resp.json())
  //     .then(data=>console.log(data));

  //   //this._tagsHistory.unshift(tag); //Con "unshift" agregamos el nuevo valor al inicio
  // }

  private saveLocalStorage():void{
    localStorage.setItem('history',JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage():void{
    
    if(!localStorage.getItem('history')){
      this.trendingGif()
      return;
    }

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!); 

    if(this._tagsHistory.length==0) return;
    
    this.searchTag(this._tagsHistory[0]);
  }

  searchTag(tag: string):void{
    if(tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit','10')
      .set('lang','es')
      .set('q', tag);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
      .subscribe(resp =>{
        
        this.gifsList = resp.data

      })
  }

  trendingGif(){
    console.log("tranding gif")
    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit',10)
    
    this.http.get<SearchResponse>(`${this.serviceUrl}/trending`,{params})
     .subscribe(resp=>{
        this.gifsList = resp.data;
     })


  }

}
