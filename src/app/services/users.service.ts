import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    url = 'http://localhost:3000/users';
    constructor(private http: HttpClient) { }
    addData(name) {
        const obj = {name};
        this
            .http
            .post(`${this.url}/add`, obj)
            .subscribe(res => console.log(res));
    }
    getData() {
        return(
        this
            .http
            .get(`${this.url}`)
        );
    }
    upData(id, name) {
        const obj = { name };
        this
            .http
            .post(`${this.url}/update/${id}`, obj)
            .subscribe(res => console.log(res));
    }
    delData(id) {
        return this
            .http
            .get(`${this.url}/delete/${id}`).subscribe();
    }
}
