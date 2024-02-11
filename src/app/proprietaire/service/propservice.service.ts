import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtService } from 'src/app/service/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class PropserviceService {
  
  baseUrl = 'http://localhost:8082/proprietaire';
  constructor(private http: HttpClient,private service:JwtService) { }
  headers= this.service.createAuthorizationHeader();
  getAllProprietaire(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl, { headers :this.headers!});
  }

  addProprietaire(proprietaire:any){
    return this.http.post<any>(this.baseUrl, proprietaire, { headers :this.headers!});
  }

  deleteProprietaire(id:number){
    return this.http.delete<any>(`${this.baseUrl}/${id}`, { headers :this.headers!});
  }

  getPropById(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`, { headers :this.headers!})
  }

  updateProprietaire(id: number, proprietaire: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, proprietaire, { headers :this.headers!});
  }
}
