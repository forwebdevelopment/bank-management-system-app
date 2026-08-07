import { ChangeDetectorRef, Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class SharedService{

  
 currentDate = new Date();
 
}