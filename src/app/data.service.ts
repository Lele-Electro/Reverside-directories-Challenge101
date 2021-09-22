import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Directories} from './idata.service';

const baseURL = 'http://localhost:3000/Directories'

@Injectable({
  providedIn: 'root'
})




  

export class DataService {



 

  constructor(private http:HttpClient) { }

  all(){

    return this.http.get<Directories[]>(baseURL);
  }


  find(directory:any){

  }

  create(name: any){
    console.log('CREATE DIRECTORY', name)
    return this.http.post<Directories>(baseURL,name);
  }
  
  update(directory:any){
    console.log('UPDATE DIRECTORY', directory)
    return this.http.post<Directories>(baseURL,directory);
  }
  
  delete(directoryId:any){
    console.log('DLETE', directoryId)

  }

}
