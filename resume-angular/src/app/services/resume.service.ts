import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IResume } from "../models/resume.model";
import { resumePath } from "../app.config";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ResumeService {
    resumeData$?: Observable<IResume>;

    constructor(private http: HttpClient) {
        this.resumeData$ = this.http.get<IResume>(resumePath);
    }
}