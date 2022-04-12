import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {developer} from "../../environments/settings";

@Injectable({
  providedIn: 'root',
})

export class DandelionService {
  constructor(protected http: HttpClient) {
  }

  entityExtraction(text): Observable<any>{
    return this.http.get('https://api.dandelion.eu/datatxt/nex/v1?lang=en&min_confidence=0.6&top_entities=8&text='+text+
      '&include=types%2Cabstract%2Ccategories%2Clod'+'&token='
      + developer.dandelion_token);
  }

  textSimilarity(text1: string, text2: string): Observable<any> {
    return this.http.get('https://api.dandelion.eu/datatxt/sim/v1?lang=en&text1='+text1+'&text2='+text2+'&token='
      + developer.dandelion_token);
  }

  textClassification(text: string): Observable<any> {
    return this.http.get('https://api.dandelion.eu/datatxt/cl/v1?model=54cf2e1c-e48a-4c14-bb96-31dc11f84eac&text='+text+'&token='
      + developer.dandelion_token);
  }

  languageDetection(text: string): Observable<any> {
    return this.http.get('https://api.dandelion.eu/datatxt/li/v1?text='+text+'&token='
      + developer.dandelion_token);
  }

  sentimentAnalysis(text: string): Observable<any> {
    return this.http.get('https://api.dandelion.eu/datatxt/sent/v1?text='+text+'&token='
      + developer.dandelion_token);
  }

  wikiSearch(text: string): Observable<any> {
    return this.http.get('https://api.dandelion.eu/datagraph/wikisearch/v1?lang=en&text='+text+'&token='
      + developer.dandelion_token);
  }

}
