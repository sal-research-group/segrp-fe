import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-graph-drawing',
  templateUrl: './graph-drawing.component.html',
  styleUrls: ['./graph-drawing.component.scss']
})
export class GraphDrawingComponent implements OnInit {

  @Input() view: {x: number, y: number};
  @Input() nodes: any[];
  @Input() links: any[];

  constructor() { }

  ngOnInit(): void {
    this.nodes = [
      {
        id: 'first',
        label: 'A',
        color: 'blue'
      },
      {
        id: 'second',
        label: 'B',
        color: 'green'
      },
      {
        id: 'third',
        label: 'C',
        color: 'red'
      }
    ];
    this.links = [
      {
        id: 'a',
        source: 'first',
        target: 'second',
        label: 'is parent of'
      },
      {
        id: 'b',
        source: 'first',
        target: 'third',
        label: 'custom label'
      },
      {
        id: 'c',
        source: 'third',
        target: 'first',
        label: 'custom label'
      }
    ];
  }

  onNodeClick(event: Event){
    console.log(event);
  }

}
