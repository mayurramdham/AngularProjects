import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [JsonPipe, CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent {
  constructor(private http: HttpClient) {}
  userList: any[] = [];
  getAllUser() {
    this.http
      .get('https://localhost:7266/api/Student')
      .subscribe((result: any) => {
        // debugger;
        this.userList = result;
        console.log('userList', this.userList);
      });
  }
}
