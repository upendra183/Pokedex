import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonService } from 'src/app/service/pokemon.service';
import { ModalComponent } from '../modal/modal/modal.component';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  allDataList: any = [];
  // img_url:any = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
  img_url: any =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world';
  term: any = '';
  offset:number = 0;
  constructor(
    private pokieService: PokemonService,
    private modalService: NgbModal
  ) {}
  getAllData() {
    this.pokieService.getAllPoki(20,this.offset).subscribe((res) => {
      console.log(res);
      const data = res.results;
      this.allDataList = data.map((val: any, i: any) => {
        return { ...val, img_path: `${this.img_url}/${i + 1}.svg`, id: i + 1 };
      });
    });
  }

  // load(){
  //   this.offset = this.offset + 20;
  //   console.log(this.allDataList.length);
  //   this.getAllData();
  // }
  ngOnInit(): void {
    this.getAllData();
  }

  cardDetails(item: any) {
    // console.log(item);
    this.getDataById(item.id,item);
   
  }

  getDataById(id: any,item:any) {
    const data1 = this.pokieService.getPokemonById(id);
    const data2 = this.pokieService.getDescriptionData(id);
    let displayObj:any = {}
    forkJoin([data1,data2]).subscribe((res:any)=>{
      // console.log(res);
      let respons1 = res[0];
      let respons2 = res[1];
      displayObj['abilities'] = respons1.abilities.map((val:any)=>val.ability.name).toString();
      displayObj['height'] = respons1.height;
      displayObj['weight'] = respons1.weight;
      displayObj['moves'] = respons1.moves.map((val:any)=>val.move.name).toString();
      displayObj['stats'] = respons1.stats.map((val:any)=>val.stat.name).toString();
      displayObj['types'] = respons1.types.map((val:any)=>val.type.name).toString();
      displayObj['descriptions'] = respons2.descriptions[7].description;
      // console.log(this.displayObj);

      const modalRef = this.modalService.open(ModalComponent, {
        backdrop: 'static',
        keyboard: true,
        size: 'xl',
      });
      modalRef.componentInstance.AlertData = {
        name: `${item.name}-Details`,
        isFooter: false,
        data:{...item,...displayObj}
      };
    });
  }
}
