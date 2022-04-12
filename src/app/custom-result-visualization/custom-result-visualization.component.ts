import {Component, Input, OnInit} from '@angular/core';
import {SearchResult} from "../model/search-result";
import {SearchService} from "../service/search-service";
import {DandelionService} from "../service/dandelion-service";
import {Entity} from "../model/entity";
import {Annotation} from "../model/annotation";

@Component({
  selector: 'app-custom-result-visualization',
  templateUrl: './custom-result-visualization.component.html',
  styleUrls: ['./custom-result-visualization.component.scss']
})
export class CustomResultVisualizationComponent implements OnInit {

  searchResults: SearchResult[];
  entities: Entity[];
  annotations: Annotation[];

  nodes: any[];
  links: any[];

  constructor(private searchService: SearchService,
              private dandelionService: DandelionService) { }

  ngOnInit(): void {
  }

  search(q){
    this.searchService.getResult(q).subscribe(response => this.searchResults = response.items);
    this.dandelionService.entityExtraction(q).subscribe(response => {
      this.entities = response.topEntities;
      this.annotations = response.annotations;
      this.setup();
    });
  }

  setup(){
    this.nodes = [];
    this.links = [];
    let count = 0;
    this.annotations.forEach(annotation => {
      this.nodes.push({id: annotation.title, label: annotation.title});
      for (var i=0; i < annotation.categories.length; i++){
        if(!this.nodes.find(item => item.id === annotation.categories[i])) {
          this.nodes.push({id: annotation.categories[i], label: annotation.categories[i]});
        }
        if(annotation.title != annotation.categories[i]) {
          this.links.push({
            id: 'a' + count,
            source: annotation.title,
            target: annotation.categories[i],
            label: 'category'
          });
          count++;
        }
      }

      // for (var i=0; i < annotation.types.length; i++){
      //   if(!this.nodes.find(item => item.id === annotation.types[i])) {
      //     var re = /http:\/\/dbpedia.org\/ontology\//gi;
      //     var str = annotation.types[i];
      //     var newstr = str.replace(re, "");
      //     this.nodes.push({id: annotation.types[i], label: newstr});
      //   }
      //   if(annotation.title != annotation.types[i]) {
      //     this.links.push({
      //       id: 'a' + count,
      //       source: annotation.title,
      //       target: annotation.types[i],
      //       label: 'type'
      //     });
      //     count++;
      //   }
      // }
    });
  }

}
