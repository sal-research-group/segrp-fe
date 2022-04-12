import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomSearchComponent} from "./custom-search/custom-search.component";
import {EmbeddedElementComponent} from "./embedded-element/embedded-element.component";
import {DandelionApiComponent} from "./dandelion-api/dandelion-api.component";
import {GraphDrawingComponent} from "./graph-drawing/graph-drawing.component";
import {CustomResultVisualizationComponent} from "./custom-result-visualization/custom-result-visualization.component";
import {InformationBehaviorComponent} from "./information-behavior/information-behavior.component";
import {QuestionClassificationComponent} from "./question-classification/question-classification.component";

export const routes: Routes = [
  {
    path: 'custom-search',
    component: CustomSearchComponent,
  },
  {
    path: 'embedded-search',
    component: EmbeddedElementComponent,
  },
  {
    path: 'dandelion-search/:recurso',
    component: DandelionApiComponent,
  },
  {
    path: 'graph-drawing',
    component: GraphDrawingComponent,
  },
  {
    path: 'custom-result-visualization',
    component: CustomResultVisualizationComponent,
  },
  {
    path: 'information-behavior/:behavior',
    component: InformationBehaviorComponent,
  },
  {
    path: 'question-classification',
    component: QuestionClassificationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
