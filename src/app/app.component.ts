import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'segrp-fe';
  selectedResource: {id: string, value: string};
  selectedBehavior: {id: string, value: string};
  resources: any[];
  behaviors: any[];

  constructor(
  ){}

  ngOnInit(): void {
    this.resources = [
      {
        id: "entityExtraction",
        value: "Entity Extraction"
      },
      {
        id: "textSimilarity",
        value: "Text Similarity"
      },
      {
        id: "textClassification",
        value: "Text Classification"
      },
      {
        id: "languageDetection",
        value: "Language Detection"
      },
      {
        id: "sentimentAnalysis",
        value: "Sentiment Analysis"
      },
      {
        id: "wikiSearch",
        value: "Wiki Search"
      }
    ];
    this.behaviors = [
      {
        id: "query",
        value: "Query Formulations"
      },
      {
        id: "result",
        value: "Sources Selection"
      }
      ];
  }

}

