import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-config',
  templateUrl: './add-config.component.html',
  styleUrls: ['./add-config.component.css']
})
export class AddConfigComponent implements OnInit {
  addConfigForm: FormGroup;
  url = "http://localhost:9090/config"
  components;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.addConfigForm = this.fb.group({
      price: "",
      composantList: ""
    })
    this.http.get('http://localhost:9090/products').toPromise().then((componentList) => {
      console.log(componentList)
      this.components = componentList;
    })
  }

  addConfig() {
    const price = this.addConfigForm.value.price;
    const composantList = this.addConfigForm.value.composantList.toString();

    console.log('prix : ' + price + ', liste des composant : ' + composantList);
    this.http.post(this.url, {
      "price": price,
      "componentList": composantList
    }).toPromise().then((res) => {
      console.log(res)
    })
    this.router.navigate(['list-config']);
  }
}
