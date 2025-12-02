import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@core/services/alert.service';
import { ApiService } from '@core/services/api.service';
import { CommonService } from '@core/services/common.service';
import { ExcelService } from '@core/services/excel.service';
import { MyAppConfig } from 'src/app/app.config';
import * as XLSX from 'xlsx';
@Component({
    selector: 'app-leave-balance-calculation',
    templateUrl: './leave-balance-calculation.component.html',
    styleUrls: ['./leave-balance-calculation.component.scss'],
    standalone: false
})
export class LeaveBalanceCalculationComponent implements OnInit {

  dataRow = [];
  showTableDataLoading = false;
  dataForExcel: any = [];
  leaveBalJson !: string;
  postData: any = [];

  // Pagination Config
  currentPageIndex: number = 0;
  first: number = 0;
  totalRecords: number = 0;
  itemPerPage: number = 100;
  itemPerPageDropdown = [100];
  paginate(event: any) {
    this.itemPerPage = event.rows;
    this.currentPageIndex = event.page;
    this.getLeaveBalance();
  }
  // Pagination Config
  constructor(
    private commonSvc: CommonService,
    private apiSvc: ApiService,
    private router: Router,
    private excelService: ExcelService,
    private alertSvc: AlertService
  ) { 
    this.commonSvc.setTitle('View & Upload Leave Balance');
  }

  ngOnInit(): void {
    this.getLeaveBalance();
  }

  getLeaveBalance() {
    let headers = new HttpHeaders();
    let params = new HttpParams();
    headers = headers.set('perPage', String(this.itemPerPage));
    headers = headers.set('page', String(this.currentPageIndex));
    this.apiSvc.get(MyAppConfig.apiUrl.getEmpLeaveBalance, { headers: headers }).subscribe({
      next: (response: any) => {
        //console.log(response);
        this.dataForExcel = [];
        this.showTableDataLoading = false;
        this.dataRow = response?.data?.data_rows || [];
        this.totalRecords = response?.data?.num_rows || 0;
      },
      error: () => { this.showTableDataLoading = false; },
      complete: () => { this.showTableDataLoading = false; }
    })
  }

  editUserProfile(id: number) {
    this.router.navigate(['/emp/edit', id]);
  }

  exportToExcel() {
    const fileToExport = this.dataRow.map((item: any) => {
      return {
        "UID": item?.user_id || '-',
        "EMPLOYEE_NAME": item?.user_full_name || '-',
        "CL": item?.cl || 0,
        "SL": item?.sl || 0,
        "PL": item?.pl || 0,
        "OL": item?.ol || 0,
        "CO": item?.co || 0,
        "BULK_UPDATED_ON": item?.leave_balance_bulk_updated_on || '-'
      }
    });
    this.excelService.exportToExcel(fileToExport, 'Leave-Balance-Template');
  }

  onUpload(event: any) {
    console.log(event);
  }

  onSelect(event: any) {
    const selectedFile = event.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event: any) => {
      console.log(event);
      let binaryData = event.target.result;
      let workbook = XLSX.read(binaryData, {type: 'binary'});
      workbook.SheetNames.forEach(sheet=> {
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
        this.postData = data;
      });
      // call API
      if(this.postData.length > 0) {
        const postData = {'action': 'updateBatch', 'leaveBalance': this.postData};
        this.apiSvc.post(MyAppConfig.apiUrl.uploadLeaveData, postData).subscribe({
          next: (response: any) => {
            this.alertSvc.setAlert('success', response.message);
            this.postData = [];
            this.getLeaveBalance();
          },
          error: () => { 
            this.showTableDataLoading = false; 
            this.postData = [];
          },
          complete: () => { 
            this.showTableDataLoading = false; 
            this.postData = [];
          }
        })
      }
    }
  }
}
