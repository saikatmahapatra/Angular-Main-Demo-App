import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MyAppConfig } from 'src/app/app.config';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  public get(url: string, options?: any) {
    return this.http.get(MyAppConfig.apiBaseUrl + url, options);
  }

  public post(url: string, data: any, options?: any) {
    return this.http.post(MyAppConfig.apiBaseUrl + url, data, options);
  }

  public put(url: string, data: any, options?: any) {
    return this.http.put(MyAppConfig.apiBaseUrl + url, data, options);
  }

  public patch(url: string, data: any, options?: any) {
    return this.http.patch(MyAppConfig.apiBaseUrl + url, data, options);
  }

  public delete(url: string, options?: any) {
    return this.http.delete(MyAppConfig.apiBaseUrl + url, options);
  }

}
