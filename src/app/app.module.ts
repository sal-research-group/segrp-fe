import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, routes} from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomSearchComponent } from './custom-search/custom-search.component';
import { EmbeddedElementComponent } from './embedded-element/embedded-element.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DandelionApiComponent } from './dandelion-api/dandelion-api.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {GraphModule} from "@swimlane/ngx-graph";
import { GraphDrawingComponent } from './graph-drawing/graph-drawing.component';
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { CustomResultVisualizationComponent } from './custom-result-visualization/custom-result-visualization.component';
import { InformationBehaviorComponent } from './information-behavior/information-behavior.component';
import {MatTableModule} from "@angular/material/table";
import {ToastrModule} from "ngx-toastr";
import { QuestionClassificationComponent } from './question-classification/question-classification.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomSearchComponent,
    EmbeddedElementComponent,
    DandelionApiComponent,
    GraphDrawingComponent,
    CustomResultVisualizationComponent,
    InformationBehaviorComponent,
    QuestionClassificationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        FormsModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatButtonModule,
        GraphModule,
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule,
        ReactiveFormsModule,
        MatTableModule,
        ToastrModule.forRoot(),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
