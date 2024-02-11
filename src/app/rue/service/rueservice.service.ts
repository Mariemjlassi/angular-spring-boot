import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtService } from 'src/app/service/jwt.service';
@Injectable({
  providedIn: 'root'
})
export class RueserviceService {
  headers= this.service.createAuthorizationHeader();
  baseUrl = 'http://localhost:8082/rues';
  constructor(private http: HttpClient,private service:JwtService) { }

  getAllrues(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl, { headers :this.headers!});
  }

  addrue(rue:any){
    return this.http.post<any>(this.baseUrl, rue, { headers :this.headers!});
  }

  deleterue(id:number){
    return this.http.delete<any>(`${this.baseUrl}/${id}`, { headers :this.headers!});
  }

  getrueById(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`, { headers :this.headers!})
  }

  updaterue(id: number, rue: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, rue, { headers :this.headers!});
  }
}
