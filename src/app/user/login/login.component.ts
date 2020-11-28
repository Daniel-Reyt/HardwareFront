import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  login() {
    const userName = this.formLogin.value.username;
    const password = this.formLogin.value.password;

    localStorage.setItem('pseudo', userName);

    this.http.get('http://localhost:9090/user/' + userName + '/' + password).toPromise().then((res) => {
      console.log(res);
      if (res === null) {
        alert("merci de ré-essayer")
      } else {
        this.router.navigate(['home/' + userName])
      }
    })
  }

}
