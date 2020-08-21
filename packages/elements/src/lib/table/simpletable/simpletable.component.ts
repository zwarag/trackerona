import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {GenericTable} from '../../../../../frontend/src/app/genericTable';

@Component({
  selector: 'lib-simpletable',
  templateUrl: './simpletable.component.html',
  styleUrls: ['./simpletable.component.scss']
})
export class SimpletableComponent implements OnInit {

  @Input() tableData: Observable<GenericTable>;

  constructor() { }

  ngOnInit(): void {
  }

}
