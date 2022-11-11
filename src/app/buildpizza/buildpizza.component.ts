import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-buildpizza',
  templateUrl: './buildpizza.component.html',
  styleUrls: ['./buildpizza.component.css']
})

export class BuildpizzaComponent implements OnInit {
  @ViewChildren('checkboxes') checkboxes: QueryList<ElementRef>;
  build = [];
  total: any;
  count: any;
  custom = this.service.checkbuild;
  constructor(public service: DataService) { }
  ngOnInit(): void {
    this.service.getbuild().subscribe((data) => this.build = data);
    this.total = this.service.checkbuild.price;
    this.count = this.service.checkbuild.topping.length;
  }
  add(data, event): void{
   if (event.target.checked){
   this.total = this.total + data.price;
   console.log(this.total, event.target.checked);
   this.custom.name = 'Custom Build Pizza';
   this.custom.price = this.total;
   this.custom.topping.push({tname: data.tname});
   console.log(this.custom);
   console.log(this.service.checkbuild);
   this.count++;
   }
   else{
     this.total = this.total - data.price;
     this.custom.price = this.total;
     this.custom.topping.splice(this.custom.topping.findIndex(element => element.tname === data.tname), 1);
     console.log(this.custom);
     this.count--;
   }
  }
  buildpizza(): void{

    if (this.count > 0){
      console.log(this.service.order);
      this.custom.quantity = 1;
      this.custom.id = Math.floor(Math.random() * 1000000);
      this.service.order.push(this.custom);
      console.log(this.service.order);
    }
    else {
    alert('Please Select Something');
    }
  }
  checkedEvnt(): void {
    this.checkboxes.forEach((element) => {
           element.nativeElement.checked = false;
   });
    this.service.checkbuild = {
    name: String,
    topping: [],
    price: 0
  };
    this.custom = this.service.checkbuild;
    this.total = 0;
    this.count = 0;
}

check(item): boolean{
 if (this.service.checkbuild.topping.find(data => data.tname === item.tname)){
   return true;
 }
}
}
