import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  div = document.getElementById('navbarToggler');

  username;
  roleUser;
  admin = false;

  constructor(private router: Router,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.getUser();
  }

  toogle() {
    console.log('change display of navbar')
  }

  logout() {
    this.router.navigate(['/'])
  }

  getUser() {
    this.username = localStorage.getItem('pseudo')
    this.http.get('http://localhost:9090/user/' + this.username).toPromise().then((res) => {
      this.roleUser = res.role;
    }).then(() => {
      if (this.roleUser === 'admin') {
        this.admin = true;
      }
      if (this.roleUser === 'guest') {
        this.admin = false;
      }
      console.log(this.admin);
    })
  }
}
