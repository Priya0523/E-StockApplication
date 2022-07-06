import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IMAGE_URLS } from 'src/app/constants/Image_url.constant';
import { GlobalAlertService } from 'src/app/services/global-alert.service';
import { StockDetailsService } from 'src/app/services/stock-details.service';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.scss']
})
export class StockDashboardComponent implements OnInit {

  public companyLists : any;
  IMAGE_CONST: any = IMAGE_URLS;
  public stockTableDetails : any;
  public arr : any;

  constructor(private readonly fb:FormBuilder,
    private readonly stockDetailsService:StockDetailsService,
    private readonly globalAlertService:GlobalAlertService) { }

  dashBoardForm: FormGroup = this.fb.group({
    searchFilterTxt: new FormControl,
    companies: new FormControl,
    startDate:new FormControl,
    endDate: new FormControl,
  });
  ngOnInit(): void {
    this.getListOfAllCompanies();
  }

  /**
   * This method is used to search a company and display its details below based on the code
   */
  searchBasedOnCompanyCode(){
    const companyInfoPayload ={
      companyCode: this.dashBoardForm.value.searchFilterTxt,
    };
    this.stockDetailsService.getCompanyInformation(companyInfoPayload).subscribe((result => {
      this.stockTableDetails = result;
      this.globalAlertService.globalSuccess("The company info is retrived successfully based on the company code");
    }),
      (error) => {
        this.globalAlertService.globalError("There is some technical error. Please try again in sometime")
      })
  }

  /**
   * This method is used to fetch all the list of registered companies
   */
  getListOfAllCompanies(){
    this.stockDetailsService.getAllCompanyLists().subscribe((result => {
      this.companyLists = result;
      this.globalAlertService.globalSuccess("The list of companies available are retrived successfully");
    }),
      (error) => {
        this.globalAlertService.globalError("There is some technical error. Please try again in sometime")
      })
  }

  /**
   * This method is used to get the stockdetails based on the selected start and end date
   */
  getStockDetailsBasedOnDates(){
    console.log("method called");
    
  }
}
