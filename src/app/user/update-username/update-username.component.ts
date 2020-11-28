import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-update-username',
  templateUrl: './update-username.component.html',
  styleUrls: ['./update-username.component.css']
})
export class UpdateUsernameComponent implements OnInit {

  username;
  modifyUsername: FormGroup;
  usernEditForm;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getUser();
    this.modifyUsername = this.fb.group({
      usernameEdit: ''
    })
  }

  getUser() {
    this.username = localStorage.getItem('pseudo')
    this.http.get('http://localhost:9090/user/' + this.username).toPromise().then((res) => {
      let user = res;
    })
  }

  updateUsername() {
    this.usernEditForm = this.modifyUsername.value.usernameEdit;
    this.getUser();
    console.log(this.usernEditForm)
    this.http.get('http://localhost:9090/user/' + this.username).toPromise().then(() => {
      this.http.post('http://localhost:9090/user/' + this.username + '/updateUsern/' + this.usernEditForm, {}).toPromise().then((data) => {
        console.log(data);
      }).catch((err) => {
        console.warn('erreur lors de la requête : ' + err.message);
      })
    })
  }
}
