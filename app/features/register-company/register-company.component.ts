import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalAlertService } from 'src/app/services/global-alert.service';
import { StockDetailsService } from 'src/app/services/stock-details.service';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.scss']
})
export class RegisterCompanyComponent implements OnInit {

  registerCompany: FormGroup = this.fb.group({
    companyCode : new FormControl,
    companyName : new FormControl,
    companyCEO : new FormControl,
    companyTurnover : new FormControl,
    companyWebsite : new FormControl,
  });
  
  constructor(private readonly router: Router,
    private readonly fb:FormBuilder,
    private readonly stockDetailsService:StockDetailsService,
    private readonly globalAlertService:GlobalAlertService) { }

  ngOnInit(): void {
  }

  /**
   * This method is used to register a new company
   */
  registerCompanies(){
    const registerCompanyPayload ={
      companyCode: this.registerCompany.value.companyCode,
      CompanyName:  this.registerCompany.value.companyName,
      companyCeo:  this.registerCompany.value.companyCEO,
      companyTurnover:  this.registerCompany.value.companyTurnover,
      companyWebSite:  this.registerCompany.value.companyWebsite,
     // stockExchange:  this.registerCompany.value.companyCode,
    };
    this.stockDetailsService.registerCompany(registerCompanyPayload).subscribe((result => {
      this.globalAlertService.globalSuccess("The company has been registered Successfully");
    }),
      (error) => {
        this.globalAlertService.globalError("There is some technical error. Please try again in sometime")
      })
  }
}
