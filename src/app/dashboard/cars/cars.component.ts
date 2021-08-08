import { Component, OnInit } from '@angular/core';
import { Cars } from '../../shared/classes/cars';
import { carData } from '../../shared/classes/carData'


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  carData = carData
  constructor() { }

  

  ngOnInit(): void {
  }

}
