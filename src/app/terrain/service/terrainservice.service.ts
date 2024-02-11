import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtService } from 'src/app/service/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class TerrainserviceService {

  baseUrl = 'http://localhost:8082/terrain';
headers= this.service.createAuthorizationHeader();
  constructor(private http: HttpClient,private service:JwtService) { }

  getAllTerrains(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl, { headers :this.headers!});
  }

  addTerrain(terrain:any){
    return this.http.post<any>(this.baseUrl, terrain, { headers :this.headers!});
  }

  deleteTerrain(id:number){
    return this.http.delete<any>(`${this.baseUrl}/${id}`, { headers :this.headers!});
  }

  getTerrainById(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`, { headers :this.headers!})
  }

  updateTerrain(id: number, terrain: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, terrain, { headers :this.headers!});
  }
}
