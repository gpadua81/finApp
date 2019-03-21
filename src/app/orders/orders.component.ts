import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  coffees = ["Americano", "Flat White", "Cappuccino", "Latte", "Espresso", "Machiato", "Mocha", "Hot Chocolate", "Tea"];

  constructor(private ordersService:OrdersService){}

  ngOnInit() {
  }

  coffeeOrder = [];
addCoffee = coffee => this.coffeeOrder.push(coffee);
removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);
};

}
