import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  baseUrl = 'https://formbold.com/s/3LyGw';

  constructor(private http: HttpClient) {}

  public sendContact(formData: any) {
    return this.http.post(this.baseUrl, formData);
  }
}
