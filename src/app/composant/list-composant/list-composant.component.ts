import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Swal from "sweetalert2";
import {HomeComponent} from "../../home/home.component";

@Component({
  selector: 'app-list-composant',
  templateUrl: './list-composant.component.html',
  styleUrls: ['./list-composant.component.css'],
})
export class ListComposantComponent implements OnInit {
  url = "http://localhost:9090/products";
  composantList: any;

  itemPerPage = 4;
  p = 1;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getComposant();
  }

  getComposant() {
    this.http.get(this.url).toPromise().then((res) => {
      this.composantList = res;
    })
  }

  getComposantDetail(i) {
    let price = i.price;
    let marque = i.marque;
    let reference = i.reference;
    let description = i.description;

    Swal.fire({
      title: "config detail :",
      html: "<div class='card'>" +
        "<p class='card-header'>prix : " + price + "</p><br>" +
        "<p class='card-body'>marque du composant :" + marque + "</p>" +
        "<p class='card-body'>référence du composant :" + reference + "</p>" +
        "<p class='card-body'>description du composant :" + description + "</p>" +
        "</div>",
      showCloseButton: true,
      showConfirmButton: false,
      showCancelButton: false
    })
  }
}
