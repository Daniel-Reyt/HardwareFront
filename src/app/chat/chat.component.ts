import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Subscription, interval, Observable} from "rxjs";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageList;
  sendMessage: FormGroup;

  username;
  roleUser;

  admin;

  div = document.getElementById('card-head');

  url = 'http://localhost:9090/message';
  componentUrl = 'http://localhost:4200/chat';
  private updateSubscription: Subscription;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.sendMessage = this.formBuilder.group(
      {
        sender: "",
        sendDate: "",
        messageBody: ""
      }
    )
    this.getMessage();
  }

  getMessage() {
    this.http.get(this.url).toPromise().then((res) => {
      this.messageList = res;
    })
  }

  send() {
    let date = new Date();
    let jour = date.getDate();
    let mois = date.getMonth() + 1;
    let year = date.getFullYear();

    let hour = date.getHours();
    let minute = date.getMinutes();

    let senderMessage = localStorage.getItem("pseudo");
    let sendDateMessage = jour + '/' + mois + '/' + year + ' ' + hour + ':' + minute;
    let messageBodySend = this.sendMessage.value.messageBody;

    console.log('sender : ' + senderMessage + ', as envoyé : ' + messageBodySend + ', a cette date : ' + sendDateMessage);
    this.http.post(this.url, {
      sender: senderMessage,
      sendDate: sendDateMessage,
      messageBody: messageBodySend
    }).toPromise().then((res) => {
      console.log(res);
    })
  }
}
