import { Component, OnInit } from '@angular/core';
import { SourceType, originSource } from './mock-data';

@Component({
  selector: 'app-admin-files-chart',
  templateUrl: './admin-files-chart.component.html',
  styleUrls: ['./admin-files-chart.component.scss']
})
export class AdminFilesChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  onSearch(term) {
    console.log(term);
  }

  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  dataTableOptions = {
    columns: [
        {
            field: 'firstName',
            header: '用户名称',
            fieldType: 'text'
        },
        {
            field: 'lastName',
            header: '昵称',
            fieldType: 'text'
        },
        {
            field: 'gender',
            header: '项目角色',
            fieldType: 'text'
        },
        {
            field: 'dob',
            header: 'Dob',
            fieldType: 'date'
        }
    ]
  };
  
  pager1 = {
    total: 100,
    pageIndex: 1,
    pageSize: 100
  };

  setTotal(number) {
    this.pager1.total = number;
  }

  setIndex(number: number) {
    this.pager1.pageIndex = number;
    console.log(this.pager1.pageIndex);
  }

}
