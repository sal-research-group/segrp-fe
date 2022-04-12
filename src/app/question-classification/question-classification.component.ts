import { Component, OnInit } from '@angular/core';
import {Question} from "../model/question";
import {QuestionClassificationService} from "../service/question-classification-service";

@Component({
  selector: 'app-question-classification',
  templateUrl: './question-classification.component.html',
  styleUrls: ['./question-classification.component.scss']
})
export class QuestionClassificationComponent implements OnInit {

  question: Question;

  constructor(private questionClassificationService: QuestionClassificationService) { }

  ngOnInit(): void {
  }

  search(q){
    this.question = {question: q, coarse_class: null, fine_class: null};
    this.questionClassificationService.questionClassification(this.question).subscribe(response => {
      this.question.coarse_class = response.coarse_class;
      this.question.fine_class = response.fine_class;
    });
  }
}
