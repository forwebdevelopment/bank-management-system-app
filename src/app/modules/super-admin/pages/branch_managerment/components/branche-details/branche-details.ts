import { Component, Input } from '@angular/core';
import { MatModule } from '../../../../../../shared/material.module';
import { BranchData } from '../../../../models/branches.model';

@Component({
  selector: 'app-branche-details',
  imports: [MatModule],
  templateUrl: './branche-details.html',
  styleUrl: './branche-details.scss',
})
export class BrancheDetails {
 @Input() activeBranch: BranchData | null = null;

}
