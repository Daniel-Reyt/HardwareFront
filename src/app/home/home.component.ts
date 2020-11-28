import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username;
  roleUser;

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.getpseudo();
    this.getUser();
  }
  getpseudo() {
    this.username = localStorage.getItem('pseudo')
    console.log(this.username);
  }

  getUser() {
    this.username = localStorage.getItem('pseudo')
    this.http.get('http://localhost:9090/user/' + this.username).toPromise().then((res) => {
      let user = res;
      this.roleUser = user.role;
    })
  }

  setPassword() {
      this.router.navigate(['update-password'])
  }
  setUsername() {
    this.router.navigate(['update-username'])
  }
}
