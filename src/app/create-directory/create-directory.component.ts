import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-directory',
  templateUrl: './create-directory.component.html',
  styleUrls: ['./create-directory.component.css']
})
export class CreateDirectoryComponent implements OnInit {

  userName:any;
  password:any;

  constructor() { }

  ngOnInit(): void {
  }

}
