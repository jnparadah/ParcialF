import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public api: HttpClient) { }

  apiUrl = "https://localhost:7220/api/";

  public async Get(gatewayController: string) {
    var respo: any;
    await this.api.get(this.apiUrl + gatewayController).toPromise().then((res => {
      respo = res;
      console.log(res);
    })
    )
    return respo;
  }

  public async post(gatewayController: string, body: any) {
    return await this.api.post(this.apiUrl + gatewayController, body).toPromise().then((res) => { })
  }

  public async delete(gatewayController: string, idBody: string) {
    return await this.api.delete(this.apiUrl + gatewayController + '/' + idBody);
  }

  public async update(gatewayController: string, body: any, idBody: string) {
    return await this.api.put(this.apiUrl + gatewayController + '/' + idBody, body);
  }

}