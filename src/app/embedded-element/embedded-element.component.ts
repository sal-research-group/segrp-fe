import { Component, OnInit } from '@angular/core';
import {developer} from "../../environments/settings";

@Component({
  selector: 'app-embedded-element',
  templateUrl: './embedded-element.component.html',
  styleUrls: ['./embedded-element.component.scss']
})
export class EmbeddedElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setupSearch();
  }

  setupSearch(){
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + developer.google_search_engine_id;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  }

}
