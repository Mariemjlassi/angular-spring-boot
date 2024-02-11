import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from 'src/app/service/jwt.service';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  headers= this.service.createAuthorizationHeader();
  baseUrl = 'http://localhost:8082/zones';
  constructor(private http: HttpClient,private service:JwtService) { }

  getAllzones(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl, { headers :this.headers!});
  }

  addzone(zone:any){
    return this.http.post<any>(this.baseUrl, zone, { headers :this.headers!});
  }

  deletezone(id:number){
    return this.http.delete<any>(`${this.baseUrl}/${id}`, { headers :this.headers!});
  }

  getzoneById(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`, { headers :this.headers!})
  }

  updatezone(id: number, zone: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, zone, { headers :this.headers!});
  }
}
