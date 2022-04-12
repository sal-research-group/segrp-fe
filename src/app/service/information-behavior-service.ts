import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Query} from "../model/query"
import {Pageable} from "../model/pageable.model";
import {QuerySearchModel} from "../model/query-search.model";
import {take} from "rxjs/operators";
import {SearchResultSearchModel} from "../model/search-result-search";
import {SearchResult} from "../model/search-result";

@Injectable({
  providedIn: 'root',
})

export class InformationBehaviorService {
  constructor(protected http: HttpClient) {
  }

  private endpoint = `${environment.information_behavior_api}`;

  findAllQueries(search: QuerySearchModel): Observable<Pageable<Query>> {
    const params = new HttpParams({fromObject: search});
    return this.http.get<any>(`${this.endpoint}/query`, {
      params,
    });
  }

  // tslint:disable-next-line:typedef
  findQuery(id: number) {
    return this.http.get<Query>(`${this.endpoint}/${id}`).pipe(take(1));
  }

  createQuery(record: Query): Observable<Query> {
    return this.http.post(`${this.endpoint}/query`, record).pipe(take(1)) as Observable<Query>;
  }

  findAllResults(search: SearchResultSearchModel): Observable<Pageable<SearchResult>> {
    const params = new HttpParams({fromObject: search});
    return this.http.get<any>(`${this.endpoint}/result`, {
      params,
    });
  }

  // tslint:disable-next-line:typedef
  findResult(id: number) {
    return this.http.get<SearchResult>(`${this.endpoint}/${id}`).pipe(take(1));
  }

  createResult(record: SearchResult): Observable<SearchResult> {
    return this.http.post(`${this.endpoint}/result`, record).pipe(take(1)) as Observable<SearchResult>;
  }
}
