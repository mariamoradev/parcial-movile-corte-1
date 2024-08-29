import { Component, OnInit } from '@angular/core';
import { CartButtonService } from '../cart-button.service';

@Component({
  selector: 'app-smallcar',
  templateUrl: './smallcar.page.html',
  styleUrls: ['./smallcar.page.scss'],
})
export class SmallcarPage implements OnInit {

  constructor(private readonly safeServi: CartButtonService) { }
public det:any;
  ngOnInit() {
    this.det= this.safeServi.showProducOfCart();
    console.log(this.det);
  }

}
