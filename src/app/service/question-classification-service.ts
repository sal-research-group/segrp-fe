import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Question} from "../model/question";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})

export class QuestionClassificationService {
  constructor(protected http: HttpClient) {
  }

  questionClassification(text: Question): Observable<Question> {
    return this.http.post('http://localhost:5003/classify', text).pipe(take(1)) as Observable<Question>;
  }
}
