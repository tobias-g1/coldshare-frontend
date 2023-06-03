import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl = environment.base;
  public currentUser: Profile;
  public showEditProfile: boolean = false;

  constructor(private httpClient: HttpClient) { }

  toggleEditProfile() {
    this.showEditProfile = !this.showEditProfile;
  }

  getUser(username: string): Observable<any> {
    return this.httpClient.get<Profile>(`${this.baseUrl}/user/profile?username=${username}`);
  }

  updateUser(data: Profile): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/user/update`, data);
  }
}
