import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/@core/services/auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: false
})
export class SidebarComponent implements OnInit {
  model: MenuItem[] = [];
  loggedInUserId: string = '';
  userRole: string = '';
  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.userRole = this.authService.getRoleId();
    this.loggedInUserId = this.authService.getUserId();
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
          { label: 'Analytics', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/dashboard/my-analytics/emp/', this.loggedInUserId] }]
      },
      {
        label: 'Admin Menu',
        items: [
          { label: "Manage Employees", icon: "pi pi-users", routerLink: ["/emp/manage"] },
          { label: "Manage Contents", icon: "note", routerLink: ["/cms/manage-cms"] },
          { label: "Manage Holidays", icon: "calendar", routerLink: ["/cms/holiday-management"] },
          { label: "Manage Leave Applications", icon: "leave", routerLink: ["/leave/manage"] },
          { label: "View & Upload Leave Balance", icon: "currency", routerLink: ["/leave/balance"] },
          { label: "Timesheet Report", icon: "report", routerLink: ["/timesheet/report"] },
          { label: "Manage Projects", icon: "projects", routerLink: ["/project/manage-project"] },
          { label: "Manage Tasks", icon: "tasks", routerLink: ["/project/manage-tasks"] },
          { label: "Settings", icon: "settings", routerLink: ["/settings"] }
        ]
      },
      {
        label: 'My Tasks',
        items: [
          { label: "Manage Leave Applications", icon: "leave", routerLink: ["/leave/requests-to-approve"] }
        ]
      },
      {
        label: 'Self Service',
        items: [
          { label: "Log Timesheet", icon: "timesheet", routerLink: ["/timesheet/log-work"] },
          { label: "Change Workflow Approvers", icon: "datacheck", routerLink: ["/emp/change-approvers"] },
          { label: "Apply Leave", icon: "send", routerLink: ["/leave/apply"] },
          { label: "Leave History", icon: "history2", routerLink: ["/leave/history"] }
        ]
      },
      {
        label: 'Organization',
        items: [
          { label: "Employees", icon: "users", routerLink: ["/emp/view-employees"] },
          { label: "My Reportees", icon: "diversity", routerLink: ["/emp/view-reportees"] },
          { label: "Holidays", icon: "calendar", routerLink: ["/cms/holiday-calendar"] }
        ]
      },
      {
        label: 'Organization',
        items: [
          { label: "My Profile", icon: "user", routerLink: ["/emp/my-profile"] },
          { label: "Change Password", icon: "password", routerLink: ["/emp/change-password"] },
          { label: "Logout", icon: "signout", routerLink: ["/auth/logout"] }
        ]
      },
      {
        label: 'UI Components',
        items: [
          { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
          { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
          { label: 'Button', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/uikit/button'] },
          { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
          { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
          { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
          { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
          { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
          { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
          { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'] },
          { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
          { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
          { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
          { label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/uikit/timeline'] },
          { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
        ]
      },
      {
        label: 'Pages',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/pages'],
        items: [
          {
            label: 'Landing',
            icon: 'pi pi-fw pi-globe',
            routerLink: ['/landing']
          },
          {
            label: 'Auth',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Login',
                icon: 'pi pi-fw pi-sign-in',
                routerLink: ['/auth/login']
              },
              {
                label: 'Error',
                icon: 'pi pi-fw pi-times-circle',
                routerLink: ['/auth/error']
              },
              {
                label: 'Access Denied',
                icon: 'pi pi-fw pi-lock',
                routerLink: ['/auth/access']
              }
            ]
          },
          {
            label: 'Crud',
            icon: 'pi pi-fw pi-pencil',
            routerLink: ['/pages/crud']
          },
          {
            label: 'Not Found',
            icon: 'pi pi-fw pi-exclamation-circle',
            routerLink: ['/pages/notfound']
          },
          {
            label: 'Empty',
            icon: 'pi pi-fw pi-circle-off',
            routerLink: ['/pages/empty']
          }
        ]
      },
      {
        label: 'Hierarchy',
        items: [
          {
            label: 'Submenu 1',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Submenu 1.1',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                ]
              },
              {
                label: 'Submenu 1.2',
                icon: 'pi pi-fw pi-bookmark',
                items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
              }
            ]
          },
          {
            label: 'Submenu 2',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Submenu 2.1',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                  { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                ]
              },
              {
                label: 'Submenu 2.2',
                icon: 'pi pi-fw pi-bookmark',
                items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
              }
            ]
          }
        ]
      },
      {
        label: 'Get Started',
        items: [
          {
            label: 'Documentation',
            icon: 'pi pi-fw pi-book',
            routerLink: ['/documentation']
          },
          {
            label: 'View Source',
            icon: 'pi pi-fw pi-github',
            url: 'https://github.com/primefaces/sakai-ng',
            target: '_blank'
          }
        ]
      }
    ];
  }

}
