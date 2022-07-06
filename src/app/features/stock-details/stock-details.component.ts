import { Component, Input, OnInit } from '@angular/core';
import { STOCK_DETAILS_TABLE } from 'src/app/constants/stockDetails.constant';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss']
})
export class StockDetailsComponent implements OnInit {

  @Input() stockTableDetails;
  
  public headers = STOCK_DETAILS_TABLE.STOCK__DETALS_CONFIG.headers;
  
  constructor() { }

  ngOnInit(): void {
  }

}
