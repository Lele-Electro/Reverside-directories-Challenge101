import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'directories',
  templateUrl: './directories.component.html',
  styleUrls: ['./directories.component.css']
})



export class DirectoriesComponent implements OnInit {
name :any
surname :any
title:any
number:any
id:any
city:any
country:any
image:any


  directories:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.directories = this.dataService.all().subscribe(directories => this.directories = directories);
  }

  createDirectory(directory:any) {
    this.dataService.create(directory)
    console.log(directory)
    console.log(directory)
    };

    submit(loginForm:any) {
      console.log(loginForm)
      };

    
  deleteDirectory(directoryId:any) {
    this.dataService.delete(directoryId)
    };


    // update(directory:any){
    //   console.log('UPDATE DIRECTORY', directory)
    //   return this.http.post<Directories>(baseURL,directory);
    // }


    

}

