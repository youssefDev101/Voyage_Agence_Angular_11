import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/shared/helpers/globals';
import { OffreFav } from 'src/app/shared/models/offreFav';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  isAddToFav:boolean=false;
  selectedCard: number;
  Alert ={
    messageText:'',
    messageBtn:'',
    color:'',
    imgStatus:false
  };
  cities: any = [
    {
      id: 1,
      name: 'Toutes les villes',
    },
    {
      id: 2,
      name: 'Tanger',
    },
    {
      id: 3,
      name: 'Zagoura',
    },
    {
      id: 4,
      name: 'Ifrane',
    },
  ];
  timesOfDay: any = [
    {
      id: 1,
      name: 'Toutes les durées',
    },
    {
      id: 2,
      name: 'week-end',
    },
    {
      id: 3,
      name: `1 semaine`,
    },
    {
      id: 4,
      name: `+ plus d'une semaine`,
    },
  ];
  prices: any = [
    {
      id: 1,
      name: 'Tous les prix',
    },
    {
      id: 2,
      name: 'Moins de 200 Dhs/personne',
    },
    {
      id: 3,
      name: 'Entre 200 - 500 Dhs/personne',
    },
    {
      id: 4,
      name: 'Entre 500 - 1000 Dhs/personne',
    },
    {
      id: 5,
      name: 'Entre 1000 - 2000 Dhs/personne',
    },
    {
      id: 6,
      name: 'Plus de 2000 Dhs/personne',
    }
  ];
  offre:any ={
    cityId:0,
    timeOdDayId:0,
    priceId:0
  }
  offres:any=[
      { id:0,rating:Array.from(String(1234), Number),img:`https://i.pinimg.com/236x/16/2e/dc/162edca70649311a5291e98c7900e012.jpg`
      ,miniDesc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in similique maxime?'
      ,longDesc:`Dans le cœur de Ifrane, cet hôtel se trouve à moins de 20 km de Source Ben Smim, Grande mosquée Annour et Jardin Ennour. Musée berbère est à 18 km de`
      ,city:{cityId:3,name:'Curcuit Ouarzazate - Marrakech',adresse:''}
      ,price:{priceId:1,value:'130 Dh'}
      ,days:{dayId:2,name:'par nuit',date:new Date()}},

      { id:1,rating:Array.from(String(1234), Number),img:`https://i.pinimg.com/236x/46/63/38/4663388a6e13395b1acb18d8b16f6b7d--marocco-north-africa.jpg`
      ,miniDesc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in similique maxime?'
      ,longDesc:`Dans le cœur de Ifrane, cet hôtel se trouve à moins de 20 km de Source Ben Smim, Grande mosquée Annour et Jardin Ennour. Musée berbère est à 18 km de`
      ,city:{cityId:4,name:'Grand Hôtel Spa Ifrane',adresse:'Boulvard de la Marche Verte, Hay Riad, Zagoura'}
      ,price:{priceId:1,value:'130 Dh'}
      ,days:{dayId:2,name:'par nuit',date:new Date()}},

      { id:2,rating:Array.from(String(12345), Number),img:`https://i.pinimg.com/474x/41/ec/66/41ec66bfd18e12a6a9cdf414b2d5712c.jpg`
      ,miniDesc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in similique maxime?'
      ,longDesc:`Dans le cœur de Ifrane, cet hôtel se trouve à moins de 20 km de Source Ben Smim, Grande mosquée Annour et Jardin Ennour. Musée berbère est à 18 km de`
      ,city:{cityId:3,name:'Une Journne sur Fes - Chaoune',adresse:'Boulvard de la Marche Verte, Hay Riad, Zagoura'}
      ,price:{priceId:1,value:'130 Dh'}
      ,days:{dayId:2,name:'par nuit',date:new Date()}}
  ];
  offresArray :any[] =[];
  constructor(public globals:Globals,private configService:ConfigService) { }

  ngOnInit() {
  }

  onSelectedCity(city :number) :void{
    this.offre.cityId=city;
  }

  onSelectedDays(days :number) :void{
    this.offre.timeOdDayId=days;
  }

  onSelectedPrice(price :number) :void{
    this.offre.priceId=price;
  }

  onClickSearchOffre(){
    if(this.offre.cityId === 0 && this.offre.timeOdDayId === 0 && this.offre.priceId === 0){
      this.offresArray=this.offres;
      return;
    }
    this.offresArray =this.offres.filter((item) => item.city.cityId == this.offre.cityId)
    console.log(this.offresArray);
  }

  onClickAddFavories(offre:OffreFav,index:number){
    this.selectedCard = index;
    this.isAddToFav=true;
    console.log(JSON.stringify(offre));
    //this.onShowAlert();
    //this.configService.onAddOffreToFav(offre);
  }

  /*open alert */
  onShowAlert(){
    this.Alert.messageText=`🎊 elle est désormais dans vous favories 🎊`;
    this.Alert.messageBtn='OK';
    this.Alert.color='info';
    this.Alert.imgStatus=true;
    this.configService.onOpenAlert();
  }
}
