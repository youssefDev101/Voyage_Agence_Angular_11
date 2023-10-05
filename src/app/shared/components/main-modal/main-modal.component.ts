import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.css'],
})
export class MainModalComponent implements OnInit {
  @Output() closeModalEvent = new EventEmitter<boolean>();

 
  showDescription: boolean = false;
  currentDate = new Date();
  selectedBtn:number;
  reservation: any = {
    city:'',
    quantity: 0,
    personeId: 0,
    typeTravel:'',
    categoryTravel:'',
    email: '',
    phone: '',
    budget: '',
    description: '',
    startDate: this.currentDate.toISOString().split('T')[0],
    endDate: this.nextDatepicker(),
  };

  firstStep: boolean = true;
  secondStep: boolean = false;
  nextStep: boolean = true;

  cities: any = [
    {
      id: 1,
      name: 'Marrakech',
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
  typeTravels: any = [
    {
      id: 1,
      name: 'Tout Seul',
      icon: 'user-times',
    },
    {
      id: 2,
      name: 'En Famille',
      icon: 'users',
    },
    {
      id: 3,
      name: 'Avec Amis',
      icon: 'user-plus',
    },
    {
      id: 4,
      name: 'En Couple',
      icon: 'user-plus',
    },
    {
      id: 5,
      name: 'En Affaire',
      icon: 'user',
    },
  ];
  quantitys: any = [
    {
      id: 1,
      nombre: 1,
    },
    {
      id: 2,
      nombre: 2,
    },
    {
      id: 3,
      nombre: 3,
    },
  ];
  categoryTravels: any = [
    {
      id: 1,
      name: 'Weekend',
      icon: 'globe',
    },
    {
      id: 2,
      name: 'Séjour',
      icon: 'plane',
    },
    {
      id: 3,
      name: 'Circuit',
      icon: 'ravelry',
    },
    {
      id: 4,
      name: 'Hôtels',
      icon: 'bed',
    },
    {
      id: 5,
      name: 'Croisière',
      icon: 'globe',
    },
  ];
  budgetTravels: any = [
    {
      id: 1,
      name: 'Tous les Budgets',
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
    },
  ];
  constructor() {}

  ngOnInit() {}

  onSubmitFirstForm() {
    if (!(this.reservation.typeTravel && this.reservation.city && this.reservation.quantity && this.reservation.categoryTravel)) {
      alert('⚠️ veuillez remplir tous les champs obligatoire !');
      return;
    }
    this.firstStep = false;
    this.secondStep = true;
    this.nextStep = false;
  }

  onSubmitSecondStep() {
    if (!this.reservation.budget && (this.reservation.startDate != this.reservation.endDate)) {
      alert('⚠️ veuillez remplir tous les champs obligatoire !');
      return;
    }
    alert('🎊 votre réservation a bien été enregistrée 🎊');
    this.closeModalEvent.emit(false);
  }

  nextDatepicker(): any {
    let nextNumberDate = this.currentDate.setDate(this.currentDate.getDate() + 5);
    const nextDate = new Date(nextNumberDate).toISOString().split('T')[0];
    return nextDate;
  }

  onClickSelectTypeTravel(type: string) {
    this.reservation.typeTravel = type;
  }

  onClickSelectCategoryTravel(category: string,index:number) {
    this.selectedBtn =index;
    this.reservation.categoryTravel = category;
  }
  onChangeCity(city: string) {
    this.reservation.city = city;
  }

  onChangeQte(quantity: number) {
    this.reservation.quantity = quantity;
  }

  onChangeBudget(budget: string) {
    this.reservation.budget = budget;
  }

  onCheckedDescription() {
    this.showDescription = !this.showDescription;
  }
  onClickCloseModal() {
    this.closeModalEvent.emit(false);
  }
}
