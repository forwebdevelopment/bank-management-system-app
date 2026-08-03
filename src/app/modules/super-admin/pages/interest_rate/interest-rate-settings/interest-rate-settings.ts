import { Component } from '@angular/core';
import { MatModule } from '../../../../../shared/material.module';
import { SummaryCard } from '../components/summary-card/summary-card';
import { InterestList } from '../components/interest-list/interest-list';
import { InterestRateTrend } from '../components/interest-rate-trend/interest-rate-trend';
import { CurrentInterestRate } from '../components/current-interest-rate/current-interest-rate';
import { ProductDetails } from '../components/product-details/product-details';

@Component({
  selector: 'app-interest-rate-settings',
  imports: [MatModule , SummaryCard , InterestList , InterestRateTrend , CurrentInterestRate , ProductDetails],
  templateUrl: './interest-rate-settings.html',
  styleUrl: './interest-rate-settings.scss',
})
export class InterestRateSettings {

openProductDetailsPopup:boolean = false;

closeProductDetials(){
  this.openProductDetailsPopup = false;

}

openProductDetials(data:any){
  console.log(data)
  this.openProductDetailsPopup = true;
}

}
