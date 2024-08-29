import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { environment } from 'src/environments/environment.prod';
import { IProductsResponse } from '../interfaces/IProductsResponse';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public array: IProductsResponse []=[];
  url =environment.URL_base + 'products';
  

  constructor(private readonly httpSrv: HttpService,
     private readonly navCtr: NavController) {}
  async ngOnInit(){
    this.array = await this.httpSrv.get<IProductsResponse[]>(this.url) 
  } 

  public doNavegate(id: number) {
    console.log(id);
  
    this.navCtr.navigateForward('details/' + id);
  }
  async onOptionSelected(event: any) {
    this.array = await this.httpSrv.get<IProductsResponse[]>(this.url + '/category/' + event.detail.value);
  }

    
}
