import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../@core/services/common.service';
import { ApiService } from '@core/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { MyAppConfig } from '../app.config';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false
})
export class DashboardComponent implements OnInit {
  post: any = [];
  searchKeyword: string = ''; // from search input
  resetSearchInput = false;

  // Pagination Config
  currentPageIndex: number = 0;
  first: number = 0;
  totalRecords: number = 0;
  itemPerPage: number = 10;
  itemPerPageDropdown = [10, 20, 30, 50, 100, 150, 200];
  paginate(event: any) {
    //console.log(event);
    this.itemPerPage = event.rows;
    this.currentPageIndex = event.page;
    this.first = event.first;
    this.getContents();
  }
  // Pagination Config


  // Event Calendar
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    //initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    events: this.getEvents.bind(this),
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true
  };
  currentEvents: EventApi[] = [];
  // Event Calendar

  constructor(private apiSvc: ApiService, private commonSvc: CommonService, private activatedRoute: ActivatedRoute) {
    this.commonSvc.setTitle('Dashbaord');
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.currentPageIndex = window.history.state?.newsPageNumber || 0;
      this.first = this.currentPageIndex * this.itemPerPage;
      this.getContents();
    })

  }

  getContents() {
    let queryParams = new HttpParams();
    if (this.searchKeyword) {
      queryParams = queryParams.append('searchBy', this.searchKeyword);
    }
    queryParams = queryParams.append('pageName', 'dashboardPosts');
    let headers = new HttpHeaders();
    headers = headers.set('perPage', String(this.itemPerPage));
    headers = headers.set('page', String(this.currentPageIndex));
    let options = { headers: headers, params: queryParams };
    this.apiSvc.get(MyAppConfig.apiUrl.getPosts, options).subscribe((response: any) => {
      this.totalRecords = response?.data['num_rows'];
      this.post = response?.data['data_rows'];
    });
  }

  getTimeStampInfo(item: any) {
    return this.commonSvc.getTimeAgo(item?.content_created_on);
  }

  getSearchInputVal(str: string) {
    this.searchKeyword = str;
    this.resetSearchInput = true;
    this.resetPagination();
    this.getContents();
  }

  resetPagination() {
    this.currentPageIndex = 0;
    this.totalRecords = 0;
    this.itemPerPage = 10;
    this.first = 0
  }

  getEvents() {
    let queryParams = new HttpParams();
    let headers = new HttpHeaders();
    let options = { headers: headers, params: queryParams };
    this.apiSvc.get(MyAppConfig.apiUrl.getEvents, options).subscribe((response: any) => {

    });
  }

}
