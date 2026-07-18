
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';


import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatListModule,
        MatBadgeModule,
        MatDividerModule,
      

    ],
    exports: [

        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatListModule,
        MatBadgeModule,
        MatDividerModule

    ]
})

export class MatModule {

}