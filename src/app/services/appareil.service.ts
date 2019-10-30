export class AppareilService{
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

      switchOnAll(){
          for(let appareil of this.appareils){
              appareil.status = 'allumé';
          }
      }

      swithOffAll(){
          for(let appareil of this.appareils){
              appareil.status = 'éteint';
          }
      }

      swithcOnOne(index: number){
          this.appareils[index].status = 'allumé';
      }

      swithcOffOne(index: number){
        this.appareils[index].status = 'éteint';
    }
}