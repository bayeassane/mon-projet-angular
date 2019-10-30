import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    }, 
    {
      name: 'Télévision',
      status: 'éteint'
    },
    {
      name: 'Ordinateur',
      status: 'allumé'
    }
  ];
  appareilOne = 'Machine à laver';
  appareilTwo = 'Télévision';
  appareilThree = 'Ordinateur';
  isAuth = false;
  constructor(){
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  onAllumer(){
    console.log('On allume tout!');
  }
}
