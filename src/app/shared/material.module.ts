
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatPaginator,} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatSortModule } from '@angular/material/sort';

import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { RouterLink , RouterLinkActive  } from '@angular/router';


@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatListModule,
        MatBadgeModule,
        MatDividerModule,
        MatBadgeModule,
        MatFormFieldModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatPaginator,
        MatSelectModule,
        MatTableModule,
        MatChipsModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatExpansionModule,
        LayoutModule,
        MatDatepickerModule,
        // other module 
        BaseChartDirective,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterLink,
        RouterLinkActive


    ],
    exports: [
        MatPaginator,
        MatSidenavModule,
        MatIconModule,
        MatChipsModule,
        MatButtonModule,
        MatTooltipModule,
        MatListModule,
        MatBadgeModule,
        MatDividerModule,
        MatMenuModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
         MatInputModule,
        MatPaginatorModule,
        MatExpansionModule,
        MatSortModule,
        LayoutModule,
        MatDatepickerModule,
        //outer module export
        BaseChartDirective,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterLink,
        RouterLinkActive
    ]
})

export class MatModule {

}