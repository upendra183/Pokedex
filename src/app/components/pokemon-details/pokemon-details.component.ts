import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit{
  item:any;
  @Input() AlertData:any;
  ngOnInit(): void {
    this.item = this.AlertData.data
    console.log(this.item,"::::::::::::")
  }
}
