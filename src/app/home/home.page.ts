import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire'
import { AngularFireList, AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { firebaseConfig } from '../../environments/environment';
import { AuthService } from '../servicios/auth.service';

const dbUrl = firebaseConfig.databaseURL;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  
  lastSend:0;
  interruptor: true;
  users: any;
  user: any;
  Items: any;
  led1: any;
  led2:any;
  led3:any;
  constructor(public navCtrl: NavController, public http: HttpClient, public authService:AuthService) {
    //this.ionViewDidLoad();
  }
    // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(){
     
    }
  getAllFocos(){
    this.authService.getAll()
    .subscribe(users => {
      console.log(users);
    });
  }

  updateTask(){
    const focos = {
      id:'1',
      estado: 1
    };
    this.authService.updateTask(focos)
    .subscribe(user => {
      console.log(user);
    })
  }

/*updateFoco(){
  const estado = {
    id: '1',
    estado: '1'
  };
  this.authService.updateFoco(estado)
  .subscribe(user => {
    console.log(user);
  });
}

 /*enviarDatos( ) {
  console.log('Diste click');
  let dato=0;
  let c=document.getElementById('check');
  if(c.checked==true){
    dato = 0;
   // document.getElementById("foco").innerHTML="<b>ON</b>";
    console.log('OFF');
    this.foco= dato;
  } else {
    dato=1;
    //document.getElementById("foco").innerHTML="OFF";
    console.log('ON');
    this.foco= dato;
  }
 }*/

}
