import { Component, OnInit } from '@angular/core';
import {InformationBehaviorService} from "../service/information-behavior-service";
import {share} from "rxjs/operators";
import {QuerySearchModel} from "../model/query-search.model";
import {ActivatedRoute} from "@angular/router";
import {SearchResultSearchModel} from "../model/search-result-search";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-information-behavior',
  templateUrl: './information-behavior.component.html',
  styleUrls: ['./information-behavior.component.scss']
})
export class InformationBehaviorComponent implements OnInit {
  queries: any[];
  querySearch: QuerySearchModel;
  selectedSources: any[];
  selectedResultSearch: SearchResultSearchModel;
  behavior: string;

  displayedColumns: string[];

  constructor(private ibService: InformationBehaviorService,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>
    {
      this.behavior = params.get("behavior");
      switch(this.behavior){
        case "query": {
          this.displayedColumns = ['id', 'content'];
          this.loadQueries();
          break;
        }
        case "result": {
          this.displayedColumns = ['queryId', 'title', 'link'];
          this.loadSelectedSources();
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  loadQueries(){
    const queries$ = this.ibService.findAllQueries(this.querySearch).pipe(share());
    queries$.subscribe(resp => {
      this.queries = resp.content.map((item) => ({
        id: `${item.id}`,
        content: `${item.content}`,
      }));
    });
  }
  loadSelectedSources(){
    const results$ = this.ibService.findAllResults(this.selectedResultSearch).pipe(share());
    results$.subscribe(resp => {
      this.selectedSources = resp.content.map((item) => ({
        id: `${item.id}`,
        title: `${item.title}`,
        queryId: `${item.queryId}`,
        link: `${item.link}`,
      }));
    });
  }
  toastWarning() {
    this.toastr.warning('Hello world!', 'Toastr fun!');
  }
}
