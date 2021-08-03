import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isloading = false;
  constructor(private authService: AuthService, private router: Router, private loadingCrl: LoadingController) { }

  ngOnInit() {}

  onLogin(){
    this.isloading = true;
    this.authService.login();
    this.loadingCrl.create({ keyboardClose: true, message: 'Logging in...'}).then(loadingEl =>{
      loadingEl.present();
      setTimeout(() => {
        this.isloading = false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/places/tabs/discover');
      }, 1500);
    });
  }
}
