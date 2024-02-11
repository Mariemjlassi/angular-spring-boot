import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtService } from 'src/app/service/jwt.service';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl = 'http://localhost:8082/arrondissements';

  constructor(private http: HttpClient,private service:JwtService) { }
  headers= this.service.createAuthorizationHeader();
  getAllArrondissements(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl, { headers :this.headers!});
  }

  addArrondissement(arrondissement:any){
    return this.http.post<any>(this.baseUrl, arrondissement, { headers :this.headers!});
  }

  deleteArrondissement(id:number){
    return this.http.delete<any>(`${this.baseUrl}/${id}`, { headers :this.headers!});
  }

  getArrondissementById(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`, { headers :this.headers!})
  }

  updateArrondissement(id: number, arrondissement: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, arrondissement, { headers :this.headers!});
  }
}
