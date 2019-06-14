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
      this.getData();
  }


  delData(id) {
    console.log(id);
    this.us.delData(id);
    this.arr.filter((value, index, arr) => {
        return value._id !== id;
    });
    this.getData();
    console.log(this.arr);
  }


  upData(id,name){
    this.us.upData(id, name);
  }
}
