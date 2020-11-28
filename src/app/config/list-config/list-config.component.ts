import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Swal from "sweetalert2";
import {HomeComponent} from "../../home/home.component";

@Component({
  selector: 'app-list-config',
  templateUrl: './list-config.component.html',
  styleUrls: ['./list-config.component.css'],
})
export class ListConfigComponent implements OnInit {
  url = "http://localhost:9090/config";
  configList: any;

  itemPerPage = 8;
  p = 1;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getConfig();
  }

  getConfig() {
    this.http.get(this.url).toPromise().then((res) => {
      this.configList = res;
    })
  }
  getConfigDetail(i) {
    let price = i.price;
    let componentList = i.componentList;
    Swal.fire({
      title: "config detail :",
      html: "<div class='card'>" +
        "<p class='card-header'>prix : " + price + "</p><br>" +
        "<p class='card-body'>liste des composant :" + componentList + "</p>" +
        "</div>",
      showCloseButton: true,
      showConfirmButton: false,
      showCancelButton: false
    })
  }
}
