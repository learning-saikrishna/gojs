import { Component, OnInit, Input } from '@angular/core';
import * as go from 'gojs';

const $ = go.GraphObject.make;

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {

  public diagram: go.Diagram = null;

  // @Input()
  // public model: go.Model;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.diagram = $(go.Diagram,'myDiagramDiv');
    var nodeDataArray = [
      {key:"Alpha",color:"skyblue",isLayoutPositioned:false,loc:"0 0"},
      {key:"Beta",color:"skyblue",isLayoutPositioned:false,loc:"100 0"},
      {key:"Gama",color:"skyblue",isLayoutPositioned:false,loc:"100 200"}
    ];
    var linkDataArray = [
      {to:"Beta",from:"Alpha",color:"blue"},
      {to:"Gama",from:"Alpha",color:"blue"}
    ];
    this.diagram.nodeTemplate = 
    $(go.Node,"Auto",
    new go.Binding("location", "loc",go.Point.parse),
    $(go.Shape,"RoundedRectangle",{fill:"white"},
      new go.Binding("fill","color")
    ),
    $(go.TextBlock,"text", {margin:10},
      new go.Binding("text","key")  
    )
    )
    this.diagram.linkTemplate = 
    $(go.Link,
        $(go.Shape, {strokeWidth:3},
          new go.Binding("stroke","color")
        ),
        $(go.Shape,
          {toArrow:"Standard",stroke:null},
            new go.Binding("fill","color")
        )
    );
    this.diagram.model = new go.GraphLinksModel(nodeDataArray,linkDataArray);
  }
}
