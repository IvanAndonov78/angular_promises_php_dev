import { Component, OnInit } from '@angular/core';
import { DataService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private dataservice: DataService) { }

  fruits: any;
  vegetables: any;
  flowers: any;
  nuts: any;

  ngOnInit() {
    this.getFruits();
    this.getVegetables();
    this.getFlowers();
    this.getNuts();
  }

  getFruits() {
    this.fruits = this.dataservice.getFruitsData();
  }

  getVegetables() {
    this.vegetables = this.dataservice.getVegetablesData();
  }

  getFlowers() {
    this.dataservice.getFlowersData().then(response => {
      this.flowers = response;
    });
  }

  getNuts() {
    this.dataservice.getNutsData().then(response => {
      this.nuts = response;
    });
  }
  
}
