import { Component, OnInit } from '@angular/core';
import {SearchService} from "../service/search-service";
import {SearchResult} from "../model/search-result";
import {InformationBehaviorService} from "../service/information-behavior-service";
import {Query} from "../model/query";

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.scss']
})
export class CustomSearchComponent implements OnInit {

  searchResults: SearchResult[];

  constructor(private service: SearchService,
              private ibService: InformationBehaviorService) { }

  ngOnInit(): void {

  }

  search(q){
    let consulta = <Query>{};
    consulta.content = q;
    this.ibService.createQuery(consulta).subscribe();
    this.service.getResult(q).subscribe(response => this.searchResults = response.items);
  }

}
