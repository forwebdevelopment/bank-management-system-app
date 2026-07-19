import { Component, Input } from '@angular/core';
import {
  DashboardStatistic,
  StatisticCardTheme,
} from '../statistics.model';
import { MatModule } from '../../../../../../shared/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistics-card',
  imports: [MatModule , CommonModule],
  templateUrl: './statistics-card.html',
  styleUrl: './statistics-card.css',
})
export class StatisticsCard {


   @Input({ required: true })
  statistic!: DashboardStatistic;

  get isPositiveGrowth(): boolean {
    return this.statistic.growth >= 0;
  }

  get growthIcon(): string {
    return this.isPositiveGrowth
      ? 'arrow_upward'
      : 'arrow_downward';
  }

  get themeClass(): string {
    return `theme-${this.statistic.theme}`;
  }

  get sparklinePoints(): string {
    if (
      !this.statistic?.trendValues ||
      this.statistic.trendValues.length < 2
    ) {
      return '';
    }

    const width = 180;
    const height = 42;
    const padding = 3;

    const values = this.statistic.trendValues;
    const minimumValue = Math.min(...values);
    const maximumValue = Math.max(...values);

    const valueRange =
      maximumValue - minimumValue === 0
        ? 1
        : maximumValue - minimumValue;

    return values
      .map((value, index) => {
        const x =
          padding +
          (index / (values.length - 1)) *
            (width - padding * 2);

        const y =
          height -
          padding -
          ((value - minimumValue) / valueRange) *
            (height - padding * 2);

        return `${x},${y}`;
      })
      .join(' ');
  }
}
