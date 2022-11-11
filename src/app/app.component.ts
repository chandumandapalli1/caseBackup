import { AfterContentChecked, Component } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {
  title = 'pizzeria';
  order: any;
  constructor( public service: DataService){

  }
  ngAfterContentChecked(): void {
    this.order = this.service.order;
    }
}
