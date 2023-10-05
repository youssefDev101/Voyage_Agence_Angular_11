import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  readonly REQUIRED_ERROR_MSG = 'ce element est obligatoire';
  readonly VALIDATE_MSG = 'valider';
  
  readonly IMG_LOGO_HEADER= '../../../assets/layouts/landscape.svg';
  readonly HOME_TITLE= `Yallah Nsafrou`;
  readonly IMG_LOGO_HOME= '../../../assets/layouts/travel_home.svg';
  readonly HOME_PARAGRAPH= `Préparez vos prochaines <strong>(vacances / voyages organisés)</strong> avec yallah nsafrou avec seulement click 👌 Vous pouvez reservez votre voyage et 🧳 Vous pouvez également consulter les voyages en ligne ..`;
  readonly HOME_BTN_FIRST= `Consultez les voyages`;
  readonly HOME_BTN_SECOUND= `Reservez un voyage`;

  
  readonly HOME_FOOTER_IMG= `../../../../assets/layouts/home_content/travel_4.svg`;
  readonly HOME_FOOTER_TITLE= `Facilitez le voyage de vos proches !`;
  readonly HOME_FOOTER_SUB_TITLE= `Offrez à vos amis et à votre famille des réductions.`;
  readonly HOME_FOOTER_SUBS_TITLE= `En Savoir Plus`;

  readonly HOME_CONTENT_TITLE= `🛎️ Nos Services`;
  readonly HOME_CONTENT_SUB_TITLE= ` Découvrez nos exceptionnels séjours en different ville du maroc`; 
  

  readonly CUSTOM_MODAL_TITLE =` 💡 Devenez Partenaire`;
  readonly CUSTOM_MODAL_SUB_TITLE =` Merci de nous laissez un message avec vos informations, on va vous contactez le plus tôt possible`;
  
  readonly ERROR_IMG= `../../../assets/layouts/home_content/error/404.svg`;
  readonly ERROR_TITLE= `😔 Oops Page Introuvable !`;
  readonly ERROR_SUB_TITLE= `Retournez à la page d'accueil`;


  readonly PAGES_SOUSCRIPTIION_IMG= `../../../assets/pages/souscription.svg`;
  readonly PAGES_SOUSCRIPTIION_TITLE= `Inscription`;
  
  readonly PAGES_OFFRE_DESC =`Hébergement, activités et bien plus encore : pour vos vacances , misez sur Yallah Nsafrou Trouvez tout ce dont vous avez besoin pour organiser votre voyage à Ifrane au même endroit. Entrez vos dates dans la barre de recherche ci-dessus ou découvrez nos meilleures offres ci-dessous !`;
  readonly PAGES_OFFRE_ERROR_MSG =`☝️ veuillez remplir tous les champs de saisie marqués en haut`;
  readonly PAGES_OFFRE_FAV_ERROR_MSG =`votre list de voyage que vous aimez est vide`;
  readonly PAGES_OFFRE_IMG_ERROR_MSG = '../../../assets/pages/empty.svg';




public removeStringSpace(string) :string{
  return string.split(' ').join('');
}

public generateCaptcha() :string{
  const alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0');
  for (let i=0;i<5;i++){
      var a = alpha[Math.floor(Math.random() * alpha.length)];
      var b = alpha[Math.floor(Math.random() * alpha.length)];
      var c = alpha[Math.floor(Math.random() * alpha.length)];
      var d = alpha[Math.floor(Math.random() * alpha.length)];
      var e = alpha[Math.floor(Math.random() * alpha.length)];
  }
  let code = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e;
  return code;
}
}
