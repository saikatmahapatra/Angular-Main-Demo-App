import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AlertMessageService, AlertMessage } from '@core/services/alert-message.service';
import { ApiService } from '@core/services/api.service';
import { CommonService } from '@core/services/common.service';
import { MyAppConfig } from 'src/app/app.config';

@Component({
    selector: 'app-manage-cms',
    templateUrl: './manage-cms.component.html',
    styleUrls: ['./manage-cms.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ManageCmsComponent implements OnInit {
  dataRow: any;
  showTableDataLoading = false;

  // Pagination Config
  currentPageIndex: number = 0;
  first: number = 0;
  totalRecords: number = 0;
  itemPerPage: number = 10;
  itemPerPageDropdown = [10, 20, 30, 50, 100, 150, 200];
  paginate(event: any) {
    this.itemPerPage = event.rows;
    this.currentPageIndex = event.page;
    this.getContents(this.postType);
  }
  // Pagination Config

  postType: any = '';
  contentCategoryList = [
    {id: 'notice', name: 'Notice'},
    {id: 'news', name: 'News'},
    {id: 'policy', name: 'HR Policy'},
    //{id: 'mandatory_holiday', name: 'Mandatory Holiday'},
    //{id: 'optional_holiday', name: 'Optional Holiday'},
  ];

  constructor(
    private commonSvc: CommonService,
    public apiSvc: ApiService,
    private router: Router,
    private alertMessageService: AlertMessageService
  ) { 
    this.commonSvc.setTitle('CMS');
  }

  ngOnInit(): void {
    this.getContents(this.postType);
  }

  getContents(type?: string) {
    let params = new HttpParams();
    if(type) {
      params = params.append('type', type)
    }
    params = params.append('perPage', String(this.itemPerPage));
    params = params.append('page', String(this.currentPageIndex));
    params = params.append('pageName', 'managePosts');
    this.showTableDataLoading = true;
    this.apiSvc.get(MyAppConfig.apiUrl.getPosts, { params: params }).subscribe((response: any) => {
      this.totalRecords = response?.data['num_rows'];
      this.dataRow = response?.data['data_rows'];
      this.showTableDataLoading = false;
    });
  }

  editPost(data: any) {
    this.router.navigate(['/cms/edit', data.id]);
  }

  deletePost(data: any) {
    let queryParams = new HttpParams();
    if (data.id) {
      queryParams = queryParams.append('id', data.id);
    }
    let options = {};
    options = { params: queryParams };
    this.apiSvc.delete(MyAppConfig.apiUrl.deletePost, options).subscribe((response: any) => {
      this.alertMessageService.setAlert({ severity: 'success', summary: 'Success', detail: response.message });
      this.getContents(this.postType);
    });
  }

  postTypeChange() {
    this.currentPageIndex = 0;
    this.getContents(this.postType);
  }

}