import { Component } from '@angular/core';
import { LeaderboardUser } from '../../../../models/audit_logs';
import { MatModule } from '../../../../../../shared/material.module';

@Component({
  selector: 'app-active-users',
  imports: [MatModule],
  templateUrl: './active-users.html',
  styleUrl: './active-users.scss',
})
export class ActiveUsers {


   // Dynamic state matrix array matching image records exactly
  public leaderboardData: LeaderboardUser[] = [
    { id: 'u1', name: 'Rahul Sharma', role: 'Branch Manager', avatarUrl: 'https://unsplash.com', actionCount: 125 },
    { id: 'u2', name: 'Priya Patel', role: 'Teller', avatarUrl: 'https://unsplash.com', actionCount: 98 },
    { id: 'u3', name: 'Amit Kumar', role: 'Loan Officer', avatarUrl: 'https://unsplash.com', actionCount: 87 },
    { id: 'u4', name: 'Sneha Iyer', role: 'Operations', avatarUrl: 'https://unsplash.com', actionCount: 74 },
    { id: 'u5', name: 'Vikram Singh', role: 'Admin', avatarUrl: 'https://unsplash.com', actionCount: 63 }
  ];

  private maxActionThreshold: number = 125;

  constructor() {}

  ngOnInit(): void {
    this.determineMaxThreshold();
  }

  // Locates the maximum number of actions in the dataset to handle progressive scaling calculations
  private determineMaxThreshold(): void {
    if (this.leaderboardData.length > 0) {
      // Sorts elements by action counts to ensure leaderboard rankings match
      this.leaderboardData.sort((a, b) => b.actionCount - a.actionCount);
      this.maxActionThreshold = this.leaderboardData[0].actionCount || 125;
    }
  }

  // Math helper converting absolute counters values into fluid layouts grid tracking widths
  public calculateProgressBarWidth(userActions: number): number {
    if (this.maxActionThreshold === 0) return 0;
    return Math.round((userActions / this.maxActionThreshold) * 100);
  }
}
