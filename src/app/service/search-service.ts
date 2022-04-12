import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {developer} from "../../environments/settings";

@Injectable({
  providedIn: 'root',
})

export class SearchService {
  constructor(protected http: HttpClient) {
  }

  getResult(q: string): Observable<any>{
    if (q) {
      return this.http.get('https://customsearch.googleapis.com/customsearch/v1?key='
        + developer.google_api_key + '&cx=' + developer.google_search_engine_id + '&q=' + q);
    }
  }

}
