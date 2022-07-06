import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ESTOCK_MARKET } from './helper';

@Injectable({
  providedIn: 'root'
})
export class StockDetailsService {

  constructor(private http : HttpClient) { }
  
  /**
   * This method is used to register a new company
   * @param payload 
   * @returns 
   */
  public registerCompany(payload: any){
    return this.http.post(ESTOCK_MARKET.REGISTER_COMPANY, payload);
  }

  /**
   * This method is used to fetch the details of the company based on the companyCode
   * @param payload 
   * @returns 
   */
  public getCompanyInformation(payload: any){
    return this.http.post(ESTOCK_MARKET.COMPANY_INFO, payload);
  }

  public getAllCompanyLists(){
    return this.http.get(ESTOCK_MARKET.ALL_COMPANY);
  }
}
