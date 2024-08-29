import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartButtonService } from 'src/app/cart-button.service';
import { IProductsResponse } from 'src/app/interfaces/IProductsResponse';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public det!: IProductsResponse;

  constructor(private readonly HttpSrv: HttpService, 
    private readonly params:ActivatedRoute, 
    private readonly HttpCart: CartButtonService, 
    private readonly safeServi: CartButtonService) { }


  async ngOnInit() {
    
    this.params.params.subscribe(async (p) => {
      const address = environment.URL_base + 'products/' + p['id'];
     
        this. det = await this.HttpSrv.get<IProductsResponse>(address);
        console.log(this. det); 
     
    });
  }

  click(){
    this.safeServi.addNewProductInCart(this.det);
  }

}



