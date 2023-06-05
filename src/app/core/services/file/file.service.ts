import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { File } from 'src/app/shared/models/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private readonly baseUrl = environment.base;

  constructor(private http: HttpClient) { }

  getFileByPinCode(pinCode: string): Observable<any> {
    const url = `${this.baseUrl}/files/pin/${pinCode}`;
    return this.http.get<any>(url);
  }

  getOwnedFiles(): Observable<any> {
    return this.http.get<File[]>(`${this.baseUrl}/files/owned`);
  }

  getSharedFiles(): Observable<any> {
    return this.http.get<File[]>(`${this.baseUrl}/files/shared`);
  }
}
