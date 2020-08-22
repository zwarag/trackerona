import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FederalDistrict} from '../../federalDistrict';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-bezirk',
  templateUrl: './bezirk.component.html',
  styleUrls: ['./bezirk.component.scss']
})
export class BezirkComponent implements OnInit {

  federalDistricts$: Observable<FederalDistrict[]>;

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.federalDistricts$ = this.data.initFederalDistricts();
  }

}
