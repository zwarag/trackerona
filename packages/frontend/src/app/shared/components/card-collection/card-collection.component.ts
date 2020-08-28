import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { CountryData } from "../../../models/country-data";

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
})
export class CardCollectionComponent implements OnInit {

  @Input() dataSource$: Observable<CountryData>

  constructor() { }

  ngOnInit(): void {

  }

}
