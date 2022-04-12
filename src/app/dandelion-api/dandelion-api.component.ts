import {Component, Input, OnInit} from '@angular/core';
import {DandelionService} from "../service/dandelion-service";
import {Entity} from "../model/entity";
import {Category} from "../model/category";
import {Language} from "../model/language";
import {Sentiment} from "../model/sentiment";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dandelion-api',
  templateUrl: './dandelion-api.component.html',
  styleUrls: ['./dandelion-api.component.scss']
})
export class DandelionApiComponent implements OnInit {
  recurso: string;
  entities: Entity[];
  similarity: number;
  categories: Category[];
  languages: Language[];
  sentiment: Sentiment;
  constructor(private dandelionService: DandelionService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>
    {
      this.recurso = params.get("recurso");
    });
  }

  entityExtraction(text: string){
    this.dandelionService.entityExtraction(text).subscribe(response => this.entities = response.topEntities);
  }

  textSimilarity(text1: string, text2: string) {
    this.dandelionService.textSimilarity(text1, text2).subscribe(response => this.similarity = response.similarity);
  }

  textClassification(text: string) {
    this.dandelionService.textClassification(text).subscribe(response => this.categories = response.categories);
  }

  languageDetection(text: string) {
    this.dandelionService.languageDetection(text).subscribe(response => this.languages = response.detectedLangs);
  }

  sentimentAnalysis(text: string) {
    this.dandelionService.sentimentAnalysis(text).subscribe(response => this.sentiment = response.sentiment);
  }

  wikiSearch(text: string) {
    this.dandelionService.wikiSearch(text).subscribe(response => this.entities = response.entities);
  }
}
