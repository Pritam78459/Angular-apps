import { Component, OnInit } from '@angular/core';
import { RecordsService } from 'C:/Users/Pritam/Documents/angular 6/intro2angular/src/app/records.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  records = []

  constructor(private myFirstService : RecordsService) {

   }

  ngOnInit() {
    //this.records = this.myFirstService.getData() 
  }

}
