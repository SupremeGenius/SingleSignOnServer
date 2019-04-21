import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.scss']
})
export class CallApiComponent implements OnInit {
  response: Object;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    debugger;
    let headers = new HttpHeaders({ 'Authorization': this.authService.getAuthorizationHeaderValue() });

        this.http.get("http://localhost:5001/api/identity", { headers: headers })
          .subscribe(response => this.response = response);
  }

}
