import { Component } from '@angular/core';
import { GrowthPeriod, GrowthSeries } from '../../../../../components/models/customer-growth.model';
import { MatModule } from '../../../../../../../shared/material.module';

@Component({
  selector: 'app-customer-growth',
  imports: [MatModule],
  templateUrl: './customer-growth.html',
  styleUrl: './customer-growth.scss',
})
export class CustomerGrowth {



   selectedPeriod: GrowthPeriod = 'week';

  periods: { label: string; value: GrowthPeriod }[] = [
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
    { label: 'Year', value: 'year' }
  ];

  growthData: Record<GrowthPeriod, GrowthSeries> = {
    week: {
      labels: ['20 Jun', '21 Jun', '22 Jun', '23 Jun', '24 Jun', '25 Jun', '26 Jun'],
      newCustomers: [5200, 6500, 7900, 7200, 8300, 7600, 8800],
      activeCustomers: [2800, 4100, 4700, 5600, 6200, 4900, 5400],
      closedAccounts: [1100, 1900, 2000, 3000, 3000, 2500, 3100]
    },
    month: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      newCustomers: [1200, 1900, 2500, 3200],
      activeCustomers: [900, 1450, 2100, 2800],
      closedAccounts: [200, 320, 290, 410]
    },
    year: {
      labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov', 'Dec'],
      newCustomers: [3200, 4400, 5100, 6300, 7100, 7900, 8800],
      activeCustomers: [2600, 3500, 4200, 5000, 5900, 6700, 7400],
      closedAccounts: [800, 1100, 950, 1300, 1200, 1450, 1600]
    }
  };

  get currentData(): GrowthSeries {
    return this.growthData[this.selectedPeriod];
  }

  selectPeriod(period: GrowthPeriod): void {
    this.selectedPeriod = period;
  }

  createPoints(values: number[]): string {
    const width = 500;
    const height = 200;
    const padding = 12;

    const allValues = [
      ...this.currentData.newCustomers,
      ...this.currentData.activeCustomers,
      ...this.currentData.closedAccounts
    ];

    const maximum = Math.max(...allValues, 1);

    return values
      .map((value, index) => {
        const x =
          values.length === 1
            ? width / 2
            : (index / (values.length - 1)) * width;

        const y =
          height -
          padding -
          (value / maximum) * (height - padding * 2);

        return `${x},${y}`;
      })
      .join(' ');
  }

  createPointList(values: number[]): { x: number; y: number }[] {
    return this.createPoints(values).split(' ').map(point => {
      const [x, y] = point.split(',').map(Number);
      return { x, y };
    });
  }
}
