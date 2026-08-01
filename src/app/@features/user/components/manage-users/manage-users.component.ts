import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../../../@core/services/common.service';
import { ApiService } from '../../../../@core/services/api.service';
import { AlertService } from '@core/services/alert.service';
import { of, Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MyAppConfig } from 'src/app/app.config';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { AppDataTableAction, AppDataTableColumn } from 'src/app/@ui-kit';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  providers: [ApiService],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class ManageUsersComponent implements OnInit {

  public saveUserForm!: UntypedFormGroup;
  public submitted!: boolean;
  public events: any[] = [];
  public userList: any;
  public postData = {};
  subscription !: Subscription;
  loading: boolean = true;
  showTableDataLoading = false;

  // Pagination Config
  itemPerPage: number = 10;
  currentPageIndex: number = 0;
  first: number = 0;
  totalRecords: number = 0;
  searchKeyword: any = '';
  paginate(event: any) {
    this.itemPerPage = event.rows;
    this.currentPageIndex = event.page;
    this.getUsersList();
  }
  // Pagination Config
  expandedRows = {};

  // Data table
  readonly userDTColumns: AppDataTableColumn[] = [
    {
      field: 'user_full_name',
      header: 'Name',
      sortable: true,
      filterable: true,
    },
    {
      field: 'user_email',
      header: 'Email Address',
      sortable: true,
      filterable: true,
    },
    {
      field: 'user_phone',
      header: 'Phone Number',
      sortable: true,
      filterable: true,
      filterType: 'numeric',
    },
    {
      field: 'designation_name',
      header: 'Designation',
      sortable: true,
      filterable: true,
    },
    {
      field: 'department_name',
      header: 'Department',
      sortable: true,
      filterable: true,
    },
    {
      field: 'user_status',
      header: 'Status',
      sortable: true,
      filterable: true,
    }
  ];

  readonly userDTActions: AppDataTableAction[] = [
    {
      icon: 'pi pi-eye',
      severity: 'info',
      tooltip: 'View',
      onClick: (row) => console.log('View', row)
    },
    {
      icon: 'pi pi-pencil',
      severity: 'success',
      tooltip: 'Edit',
      onClick: (row) => console.log('Edit', row)
    },
    {
      icon: 'pi pi-trash',
      severity: 'danger',
      tooltip: 'Delete',
      onClick: (row) => console.log('Delete', row)
    }
  ];

  constructor(
    private apiSvc: ApiService,
    public formBuilder: UntypedFormBuilder,
    private commonSvc: CommonService,
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService
  ) {
    this.commonSvc.setTitle('Manage Employees');
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.currentPageIndex = window.history.state?.manageUserPageIndex || 0;
      this.first = this.currentPageIndex * this.itemPerPage;
      this.getUsersList();
    })

  }

  getUsersList() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('perPage', String(this.itemPerPage));
    queryParams = queryParams.append('page', String(this.currentPageIndex));
    if (this.searchKeyword.trim()) {
      queryParams = queryParams.append('keywords', this.searchKeyword.trim());
    }
    let options = { params: queryParams };
    this.showTableDataLoading = true;
    this.apiSvc.get(MyAppConfig.apiUrl.getUsers, options).subscribe({
      next: (val: any) => {
        this.totalRecords = val?.data?.num_rows;
        this.userList = val?.data?.data_rows;
        this.loading = false;
        this.showTableDataLoading = false;
      }
    });
  }

  // expandAll() {
  //   this.expandedRows = this.userList.reduce((acc: { [x: string]: boolean; }, p: { id: string | number; }) => (acc[p.id] = true) && acc, {});
  // }

  // collapseAll() {
  //   this.expandedRows = {};
  // }

  // onRowExpand(event: TableRowExpandEvent) {
  //   this.messageService.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
  // }

  // onRowCollapse(event: TableRowCollapseEvent) {
  //   this.messageService.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
  // }

  // getUserInterval() {
  //   this.subscription = timer(0, 10000).pipe(
  //     switchMap(() => this.apiSvc.get(MyAppConfig.apiUrl.getUsers))
  //   ).subscribe((val: any) => {
  //     this.userList = val?.data?.data_rows;
  //   });
  // }

  redirectToProfile(id: number) {
    const navigationExtras: NavigationExtras = {
      state: { manageUserPageIndex: this.currentPageIndex },
    };
    this.router.navigate(['/emp/view-emp-profile', id], navigationExtras);
  }

  editUserProfile(id: number) {
    const navigationExtras: NavigationExtras = {
      state: { manageUserPageIndex: this.currentPageIndex },
    };
    this.router.navigate(['/emp/edit', id], navigationExtras);
  }

  getSearchKeyword(str: string) {
    this.searchKeyword = str;
    this.resetPagination();
    this.getUsersList();
  }

  resetPagination() {
    this.currentPageIndex = 0;
    this.totalRecords = 0;
    this.itemPerPage = 10;
    this.first = 0;
  }

  navigateToAddUser() {
    const navigationExtras: NavigationExtras = {
      state: { manageUserPageIndex: this.currentPageIndex },
    };
    this.router.navigate(['/emp/add'], navigationExtras);
  }

  navigateToAnalytics(id: number) {
    const navigationExtras: NavigationExtras = {
      state: { manageUserPageIndex: this.currentPageIndex },
    };
    this.router.navigate(['/dashboard/analytics/emp/' + id], navigationExtras);
  }

}
