import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  username;
  modifyPass: FormGroup;
  passEditForm;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getUser();
    this.modifyPass = this.fb.group({
      passwordEdit: ''
    })
  }

  getUser() {
    this.username = localStorage.getItem('pseudo')
    this.http.get('http://localhost:9090/user/' + this.username).toPromise().then((res) => {
      let user = res;
    })
  }

  updatePassword() {
    this.passEditForm = this.modifyPass.value.passwordEdit;
    this.getUser();
    console.log(this.passEditForm)
    this.http.post('http://localhost:9090/user/' + this.username + '/updatePass/' + this.passEditForm, {}).toPromise().then((data) => {
      console.log(data);
    }).catch((err) => {
      console.warn('erreur lors de la requête : ' + err.message);
    })
  }
}
