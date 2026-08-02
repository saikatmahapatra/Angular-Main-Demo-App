import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AlertMessageService } from '@core/services/alert-message.service';
import { ApiService } from '@core/services/api.service';
import { CommonService } from '@core/services/common.service';
import { MyAppConfig } from 'src/app/app.config';

@Component({
    selector: 'app-edit-approvers',
    templateUrl: './edit-approvers.component.html',
    styleUrls: ['./edit-approvers.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class EditApproversComponent implements OnInit {
  data: any;
  currentApprovers: any = {};
  searchKeywords = '';
  // Pagination Config
  currentPageIndex: number = 0;
  first: number = 0;
  totalRecords: number = 0;
  itemPerPage: number = 10;
  itemPerPageDropdown = [10, 20, 30, 50, 100];
  paginate(event: any) {
    this.itemPerPage = event.rows;
    this.currentPageIndex = event.page;
    this.getEmp();
  }
  // Pagination Config
  constructor(
    private apiSvc: ApiService,
    private alertMessageService: AlertMessageService,
    private commonSvc: CommonService,
  ) { 
    this.commonSvc.setTitle('Change Workflow Approvers');
  }

  ngOnInit(): void {
    this.getApprovers();
  }

  getApprovers() {
    this.apiSvc.get(MyAppConfig.apiUrl.approvers).subscribe((response: any) => {
      this.currentApprovers = response?.data ? response?.data[0] : {};
    });
  }


  getSearchInputVal(str: string) {
    this.searchKeywords = str;
    this.currentPageIndex = 0;
    this.totalRecords = 0;
    this.getEmp();
  }

  getEmp() {
    let queryParams = new HttpParams();
    let postData = { keywords: this.searchKeywords, action: 'search' };
    queryParams = queryParams.append('perPage', String(this.itemPerPage));
    queryParams = queryParams.append('page', String(this.currentPageIndex));
    this.apiSvc.post(MyAppConfig.apiUrl.searchUser, postData, { params: queryParams }).subscribe({
      next: (response: any) => {
        this.data = response?.data?.data_rows;
        this.totalRecords = response?.data?.num_rows;
      }
    });
  }

  setApprover(event: any, user?: any) {
    if (event.target.value) {
      const data = { approverType: event.target.value, userDetails: user }
      this.apiSvc.post(MyAppConfig.apiUrl.changeApprovers, data).subscribe({
        next: (response: any) => {
          this.alertMessageService.setAlert('success', response.message);
          this.getApprovers();
        },
        error: () => {

        },
        complete: () => {
          //this.markAsRead();
        }
      });
    }
  }

}
