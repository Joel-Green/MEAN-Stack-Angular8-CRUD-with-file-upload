import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
arr;
name;
  constructor(private us: UsersService) { }

  ngOnInit() {
      this.getData();
  }

  getData() {
      this.us.getData().subscribe(data => { this.arr = data; });
  }



  addData() {
      this.us.addData(this.name);
      this.arr.push({name: this.name});
  }
}
