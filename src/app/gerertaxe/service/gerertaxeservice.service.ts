import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GerertaxeserviceService {

  baseUrl = 'http://localhost:8082';
  constructor(private http:HttpClient,private service:JwtService) { }

  headers= this.service.createAuthorizationHeader();

  getZonesByArrondissement(arrondissement_id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/zones/arrondissement/${arrondissement_id}`,{ headers :this.headers!});
  }

  getArrondissement():Observable<any[]>{
    
    return this.http.get<any[]>(`${this.baseUrl}/arrondissements`,{ headers :this.headers!});
  }
  getRueByZone(zone_id:number):Observable<any[]>{
    const url =`${this.baseUrl}/rues/zone/${zone_id}`;
    return this.http.get<any[]>(`${this.baseUrl}/rues/zone/${zone_id}`,{ headers :this.headers!}); 
  }

  calculateTax(methodeCalcul: string, valeurVenale: number, densiteId: number, surface: number): Observable<any> {
    const url = `${this.baseUrl}/taxe/calcul`;
    const payload = { methodeCalcul, valeurVenale, densiteId, surface };
    return this.http.post<any>(`${this.baseUrl}/taxe/calcul`, payload,{ headers :this.headers!});
  }

  enregistrerProprietaireEtTerrain(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/taxe/calcul/enregistrerProprietaireEtTerrain`, data,{ headers :this.headers!});
  }

  getAllDensites(): Observable<any[]> {
    const url=`${this.baseUrl}/densite`;
    return this.http.get<any[]>(`${this.baseUrl}/densite`,{ headers :this.headers!});
  }

  sendEmail(emailData: any): Observable<any> {
    console.log('Envoi de l\'e-mail avec les données suivantes :', emailData);
    return this.http.post<any>(`${this.baseUrl}/sendmail`, emailData,{ headers :this.headers!});
  }
}
