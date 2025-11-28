import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { CommonService } from 'src/app/@core/services/common.service';
import { NavigationService } from 'src/app/@core/services/navigation.service';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: false
})
export class SidebarComponent implements OnInit {
  // showSideNav: Observable<any> | undefined;
  // @Input() sidenavTemplateRef: any;
  // @Input() duration: number = 0.25;
  // @Input() navWidth: number = window.innerWidth;
  // @Input() direction: SideNavDirection = SideNavDirection.Left;
  userRole = '';
  loggedInUserId = '';
  welcomeUserText = '';
  sideBarMenuItems: any = [];
  constructor(private navService: NavigationService, private commonSvc: CommonService, private authSvc: AuthService) { }

  ngOnInit(): void {
    this.userRole = this.authSvc.getRoleId();
    this.loggedInUserId = this.authSvc.getUserId();
    const user = this.authSvc.getUser();
    this.welcomeUserText = user.user_full_name;

    this.sideBarMenuItems = [
      {
        id: 1,
        label: "Getting Started",
        icon: "home",
        showIcon: false,
        isAdminMenu: false,
        items: [
          { id: 1, label: "Dashboard", icon: "home", showIcon: true, url: ["/dashboard"] },
          { id: 2, label: "Analytics", icon: "dashboard", showIcon: true, url: ["/dashboard/my-analytics/emp/", this.loggedInUserId] }
        ]
      },
      {
        id: 2,
        label: "Admin Menu",
        icon: "admin",
        showIcon: false,
        isAdminMenu: true,
        items: [
          { id: 1, label: "Manage Employees", icon: "users", showIcon: true,  url: ["/emp/manage"] },
          { id: 2, label: "Manage Contents", icon: "note", showIcon: true,  url: ["/cms/manage-cms"] },
          { id: 3, label: "Manage Holidays", icon: "calendar", showIcon: true,  url: ["/cms/holiday-management"] },
          { id: 4, label: "Manage Leave Applications", icon: "leave", showIcon: true,  url: ["/leave/manage"] },
          { id: 5, label: "View & Upload Leave Balance", icon: "currency", showIcon: true,  url: ["/leave/balance"] },
          { id: 6, label: "Timesheet Report", icon: "report", showIcon: true,  url: ["/timesheet/report"] },
          { id: 7, label: "Manage Projects", icon: "projects", showIcon: true,  url: ["/project/manage-project"] },
          { id: 8, label: "Manage Tasks", icon: "tasks", showIcon: true,  url: ["/project/manage-tasks"] },
          { id: 10, label: "Settings", icon: "settings", showIcon: true,  url: ["/settings"] }
        ]
      },
      {
        id: 3,
        label: "My Tasks",
        icon: "tasks",
        showIcon: false,
        isAdminMenu: false,
        items: [
          { id: 1, label: "Manage Leave Applications", icon: "leave", showIcon: true,  url: ["/leave/requests-to-approve"] }
        ]
      },
      {
        id: 4,
        label: "Self Services",
        icon: "selfService",
        showIcon: false,
        isAdminMenu: false,
        items: [
          { id: 1, label: "Log Timesheet", icon: "timesheet", showIcon: true,  url: ["/timesheet/log-work"] },
          { id: 2, label: "Change Workflow Approvers", icon: "datacheck", showIcon: true,  url: ["/emp/change-approvers"] },
          { id: 3, label: "Apply Leave", icon: "send", showIcon: true,  url: ["/leave/apply"] },
          { id: 4, label: "Leave History", icon: "history2", showIcon: true,  url: ["/leave/history"] }
        ]
      },
      {
        id: 5,
        label: "Organization",
        icon: "globe",
        showIcon: false,
        isAdminMenu: false,
        items: [
          { id: 1, label: "Employees", icon: "users", showIcon: true,  url: ["/emp/view-employees"] },
          { id: 2, label: "My Reportees", icon: "diversity", showIcon: true,  url: ["/emp/view-reportees"] },
          { id: 3, label: "Holidays", icon: "calendar", showIcon: true,  url: ["/cms/holiday-calendar"] }
        ]
      },
      {
        id: 6,
        label: "My Account",
        icon: "user",
        showIcon: false,
        isAdminMenu: false,
        items: [
          { id: 1, label: "My Profile", icon: "user", showIcon: true, url: ["/emp/my-profile"] },
          { id: 2, label: "Change Password", icon: "password", showIcon: true, url: ["/emp/change-password"] },
          { id: 3, label: "Logout", icon: "signout", showIcon: true, url: ["/auth/logout"] }
        ]
      },
    ];
  }

  transform(value: string, size: number = 10): string {
    if (!value) {
      return '';
    }
    const limit = size > 0 ? size : 10;
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }

  closeSideBar() {
    if (this.commonSvc.getScreenResolutionBreakPoint() === 'xs' || this.commonSvc.getScreenResolutionBreakPoint() === 'sm' || this.commonSvc.getScreenResolutionBreakPoint() === 'md') {
      this.navService.toggleNavState();
    }
  }

}
