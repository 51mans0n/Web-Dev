import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = environment.apiUrl + '/companies';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseUrl);
  }
}
