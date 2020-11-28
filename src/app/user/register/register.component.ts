import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  addUserForm: FormGroup;
  url = "http://localhost:9090/user"

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      username: "",
      password: ""
    })
  }

  addUser() {
    const username = this.addUserForm.value.username;
    const password = this.addUserForm.value.password;
    console.log('username : ' + username + ', password : ' + password);
    this.http.post(this.url, {
      "username": username,
      "password": password,
      "role": "guest"
    }).toPromise().then((res) => {
      console.log(res)
    })
    this.router.navigate(['list-user']);
  }
}
