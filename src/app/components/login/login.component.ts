import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/IUser';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent  {
  formData: IUser = {} as IUser

  constructor(private authServ: AuthService) {}


  addUser() {
    this.authServ.logInUser(this.formData);
  }
}
