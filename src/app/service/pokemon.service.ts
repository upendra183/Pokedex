import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService extends BaseService{
  url:any='https://pokeapi.co/api/v2/'


  getAllPoki(limit= 20,offset:any){
    return this.get(`${this.url}ability/?limit=${limit}&offset=${offset}`)
  }

  getPokemonById(id:any){
    return this.get(`${this.url}pokemon/${id}`)
  }

  getDescriptionData(id:any){
    return this.get(`${this.url}characteristic/${id}`)
  }

}
