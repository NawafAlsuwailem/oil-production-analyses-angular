import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {OilExport} from '../model/oilExport';

@Injectable({
  providedIn: 'root'
})
export class OilExportService {

  // API variable
  private readonly BASE_URL = environment.serverURL;

  constructor(private http: HttpClient, private router: Router) { }
  /** GET objs from the server */
  findAll(): Observable<OilExport[]> {
    return this.http.get<OilExport[]>(this.BASE_URL);
  }
}
