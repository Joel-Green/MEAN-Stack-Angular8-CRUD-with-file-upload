import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
name: string;
  constructor(private us: UsersService) { }

  ngOnInit() {
  }

  addData() {
      this.us.addData(this.name);
      console.log(this.name);
  }

}
