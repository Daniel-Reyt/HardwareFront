import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Swal from 'sweetalert2'
import {HomeComponent} from "../../home/home.component";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  url = "http://localhost:9090/user";
  userList: any;

  user_id: number;

  itemPerPage = 4;
  p = 1;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.http.get(this.url).toPromise().then((res) => {
      this.userList = res;
    })
  }

  getUserDetail(i) {
    let username = i.username;
    let password = i.password;
    Swal.fire({
      title: "user detail :",
      html: "<div class='card'>" +
        "<p class='card-header'>username : " + username + "</p><br>" +
        "<p class='card-body'>password :" + password + "</p>" +
        "</div>",
      showCloseButton: true,
      showConfirmButton: false,
      showCancelButton: false
    })
  }
}
