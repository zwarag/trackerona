import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from '../../data.service';
import {CountryData} from '../../countryData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  austriaData$: Observable<CountryData>;

  constructor(
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.austriaData$ = this.data.countryData$;
  }
}
