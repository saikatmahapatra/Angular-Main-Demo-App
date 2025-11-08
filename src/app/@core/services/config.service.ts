import { Injectable, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyAppConfig } from 'src/app/app.config';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }
  initializeApp(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.loadConfig()
        .then(res => {
          resolve(true);
        })
        .catch(err => {
        });
    });
  }

  loadConfig() {
    const configJSONFile = `assets/config/config.${environment.name}.json`;
    return new Promise((resolve, reject) => {
      this.http.get(configJSONFile)
        .subscribe(
          (config: any) => {
            MyAppConfig.apiBaseUrl = config.useMockServer ? config.mockAPIUrl : config.apiBaseUrl;
            // MyAppConfig.useMockServer = config.useMockServer;
            // MyAppConfig.title = config.title;
            // MyAppConfig.productName = config?.productName;
            // MyAppConfig.copyrightInfo = config?.copyrightInfo;
            // MyAppConfig.version = config?.version;
            MyAppConfig.maintenanceMode = config.maintenanceMode || false;
            MyAppConfig.mfaEnabled = config.mfaEnabled;
            return resolve(config);
          },
          err => {
            return reject(err);
          }
        );
    });
  }

}
