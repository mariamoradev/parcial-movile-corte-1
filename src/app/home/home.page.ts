import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { environment } from 'src/environments/environment.prod';
import { IProductsResponse, Category } from '../interfaces/IProductsResponse';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public array: IProductsResponse []=[];
  public elements!: Category;
  url =environment.URL_base + "products";
  

  constructor(private readonly httpSrv: HttpService, private readonly navCtr: NavController) {}
  async ngOnInit(){
    
    this.array = await this.httpSrv.get<IProductsResponse[]>(this.url)
    
    
      
  } 
  async onOptionSelected(event: any) {
    if (event.detail.value != 'all') {
      this.array = await this.httpSrv.get<IProductsResponse[]>(
        this.url + '/category/' + event.detail.value
      );
    } else {
      this.ngOnInit();
    }
  }

    public doNavigate(event: number){
      console.log (event);
      
      this.navCtr.navigateForward('details/'+event);
    }

}
