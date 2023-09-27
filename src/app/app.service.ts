import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: "root"})

export class AppService {
    constructor(public http: HttpClient) {}

    getData() {
        return this.http.get("http://localhost:8081/resursa2/primul");
    }
}