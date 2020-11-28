import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-composant',
  templateUrl: './add-composant.component.html',
  styleUrls: ['./add-composant.component.css']
})
export class AddComposantComponent implements OnInit {
  addComposantForm: FormGroup;
  url = "http://localhost:9090/products"

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.addComposantForm = this.fb.group({
      price: "",
      marque: "",
      reference: "",
      description: ""
    })
  }

  addComposant() {
    const price = this.addComposantForm.value.price;
    const marque = this.addComposantForm.value.marque;
    const reference = this.addComposantForm.value.reference;
    const description = this.addComposantForm.value.description;

    console.log('prix : ' + price + ', marque : ' + marque + ', reference : ' + reference + ', description : ' + description);
    this.http.post(this.url, {
      "price": price,
      "marque": marque,
      "reference": reference,
      "description": description
    }).toPromise().then((res) => {
      console.log(res)
    })
    this.router.navigate(['list-composant']);
  }
}
