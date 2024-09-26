import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NservService {
  private apiurl= 'https://api.escuelajs.co/api/v1/products';
  

  constructor(private http: HttpClient) { }

  getPost(){
    return this.http.get(this.apiurl);
  }

  getById(id: number){
    return this.http.get(`${this.apiurl}/${id}`);
  }

  getPostsData() {
    this.http.get(this.apiurl)
      .subscribe({
        next: (posts) => {
          return posts;
        },
        error: (error) => {
          console.error(error);
          return [];
        }
      });
  }

  getAll(): Observable<any>{
    return this.http.get<any[]>(this.apiurl);
  }

}
