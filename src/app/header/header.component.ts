import {Component, EventEmitter, Output} from '@angular/core';

@Component ({
  selector: 'app-header',
  templateUrl: '../header/header.component.html',
  styleUrls: ['../header/header.component.css']

})

export class HeaderComponent{
@Output() featureSelected = new EventEmitter<string>();
 onSelect(newFeature : string){
   this.featureSelected.emit(newFeature);
}
}
