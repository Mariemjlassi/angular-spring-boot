import { Component, OnInit } from '@angular/core';
import { ProprietaireDTO } from 'src/app/proprietaire/model/proprietaire-dto';
import { Terrain } from 'src/app/terrain/model/terrain';
import { Taxe } from '../model/taxe';
import { GerertaxeserviceService } from '../service/gerertaxeservice.service';
import { PropserviceService } from 'src/app/proprietaire/service/propservice.service';
import { TerrainserviceService } from 'src/app/terrain/service/terrainservice.service';
import html2pdf from 'html2pdf.js';


@Component({
  selector: 'app-gerertaxe',
  templateUrl: './gerertaxe.component.html',
  styleUrls: ['./gerertaxe.component.css']
})
export class GerertaxeComponent implements OnInit{
  afficherBoutonTelecharger: boolean = true;
  affichage=false;
  proprietaireResult!: ProprietaireDTO ;
  nomProprietaire: string='';
  prenomProprietaire: string='';
  cinProprietaire: string='';
  adresseProprietaire: string='';
  emailProprietaire:string='';
  telProprietaire:string='';

  adresseTerrain: string='';
  arrondissements: any[] = [];
  zones: any[] = [];
  rues: any[] = [];
  selectedArrondissement: any;
  selectedZone: any;
  selectedRue: any;
  showZoneSelector = false;
  showRueSelector = false;

  valeurVenale: any;
  densiteId: any;
  surface: any;
  methodeCalcul: string = 'densite';
  taxeResult!:Taxe;
  Result:any;
  densites : any[] = [];
  proprietaire!: ProprietaireDTO ;
  terrain!: Terrain ;

  constructor(private service:GerertaxeserviceService,private propService:PropserviceService,private terrainService:TerrainserviceService){}


  ngOnInit(): void {
    this.service.getArrondissement().subscribe((data)=>{
      this.arrondissements=data;
      console.log(data);
     });
  
     this.service.getAllDensites().subscribe((data) => {
      this.densites=data;
      console.log(data);
     })
  }

  onArrondissementChange(){
    if (this.selectedArrondissement){
      this.showZoneSelector = true;
      this.showRueSelector = false;
      this.service.getZonesByArrondissement(this.selectedArrondissement.id).subscribe((data)=>{
        this.zones=data;
      });
    }
  }

  onZoneChange(){
    if (this.selectedZone){
      this.showRueSelector=true;
      this.service.getRueByZone(this.selectedZone.id).subscribe((data)=>{
        this.rues=data;
      })
    }
  }

  calculerTaxe() {
    this.service.calculateTax(this.methodeCalcul, this.valeurVenale, this.densiteId, this.surface)
      .subscribe(
        result => {
          this.Result = result;
          console.log('Résultat du calcul de la taxe :', result);
        },
        error => {
          console.error('Erreur lors du calcul de la taxe :', error);
        }
      );

      const nouveauProprietaire = {
        nom: this.nomProprietaire,
        prenom: this.prenomProprietaire,
        cin: this.cinProprietaire,
        adresse: this.adresseProprietaire,
        email:this.emailProprietaire,
        tel:this.telProprietaire
      };
      this.propService.addProprietaire(nouveauProprietaire).subscribe((proprietaire) => {
        this.proprietaireResult=proprietaire;
        // Créer le terrain
        const nouveauTerrain = {
          surface: this.surface,
          adresse: this.adresseTerrain,
          rue: this.selectedRue,
          proprietaire: proprietaire
        };
  
        // Ajouter le terrain
        this.terrainService.addTerrain(nouveauTerrain).subscribe((terrain) => {
          // Mettre à jour l'ID du propriétaire et du terrain dans le résultat de la taxe
          this.taxeResult.proprietaireId = proprietaire.id;
          this.taxeResult.terrainId = terrain.id;
  
          // Afficher le résultat du calcul de la taxe
          console.log('Résultat du calcul de la taxe :', this.Result);
          const proprietaireEmail = this.proprietaireResult.email;
      if (proprietaireEmail) {
        // Assurez-vous de remplacer 'amount' par la propriété correcte de votre modèle Taxe
        const emailData = {
          to: proprietaireEmail,
          cc: '', // Ajoutez une copie si nécessaire
          subject: 'Notification de paiement de taxe',
          body: `Cher ${this.proprietaireResult.nom},\n\nVous devez payer votre taxe. 
                 Le montant de la taxe calculé est : ${this.Result}. Veuillez effectuer le paiement dès que possible.`
        };
      
        this.service.sendEmail(emailData).subscribe(
          result => {
            console.log('E-mail envoyé avec succès :', result);
          },
          error => {
            console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
          }
      );
      } else {
        console.error('L\'e-mail du propriétaire n\'est pas défini.');
      }
        });
      });
      this.affichage=true;
      
    }

    download(){
      const options ={
        filename:"programme.pdf",
        image:{type:'jpeg', quality:1},
        html2canvas:{},
        jsPDF:{orientation:"landscape"},
      }
      const content=document.getElementById('pdf');
      html2pdf().from(content).set(options).save();
    }

}
