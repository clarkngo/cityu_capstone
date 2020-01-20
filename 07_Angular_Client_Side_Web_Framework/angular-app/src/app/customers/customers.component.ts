import { Component, OnInit } from '@angular/core';

interface customers {
  [index: number]: {
    id: string;
    username: string;
    email: string;
    isHiddenEmail: boolean;
  }
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: customers = [
    { id: '1', username: 'customerA', email: 'customerA@bookstore.com', isHiddenEmail: false},
    { id: '2', username: 'customerB', email: 'customerB@bookstore.com', isHiddenEmail: true},
    { id: '3', username: 'customerC', email: 'customerC@bookstore.com', isHiddenEmail: false},
  ];
  constructor() { }

  ngOnInit() {
  }

}
