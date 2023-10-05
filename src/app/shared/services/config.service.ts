import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OffreFav } from '../models/offreFav';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private openSupportModal = new BehaviorSubject(false);
  private openAlert = new BehaviorSubject(false);
  private offreFav = new BehaviorSubject(JSON.parse(localStorage.getItem('offres_fav')) || []);
  currentOffreFav = this.offreFav.asObservable();

constructor() { }

/* alert colse/open */
onCloseAlert() {
  this.openAlert.next(false);
}
onOpenAlert() {
  this.openAlert.next(true);
}
onGetAlert(): Observable<any> {
  return this.openAlert.asObservable();
}
/* modal colse/open */
onClearModal() {
  this.openSupportModal.next(false);
}
onSupportModal(): Observable<any> {
  return this.openSupportModal.asObservable();
}
onChangeModal(element: boolean) {
  this.openSupportModal.next(element);
}

onAddOffreToFav(offre:OffreFav){
  let offresFav = JSON.parse(localStorage.getItem('offres_fav')) || [];
  offresFav.push(offre);
  localStorage.setItem('offres_fav',JSON.stringify(offresFav));
  this.offreFav.next(offresFav);
}
}
