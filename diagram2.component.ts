import { Component, OnInit, Input } from '@angular/core';
import * as go from 'gojs';

const $ = go.GraphObject.make;

@Component({
  selector: 'app-diagram2',
  templateUrl: './diagram2.component.html',
  styleUrls: ['./diagram2.component.scss']
})
export class Diagram2Component implements OnInit {

  public diagram: go.Diagram = null;

  // @Input()
  // public model: go.Model;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.diagram = $(go.Diagram,'myDiagramDiv2');
    var nodeDataArray = [
      {key:"Alpha",color:"yellow"},
      {key:"Beta",color:"red"},
      {key:"Zeta",isGroup:"true"},
      {key:"Gama",color:"green",group:"Zeta"},
      {key:"Delta",color:"blue",group:"Zeta"},
    ];
    var linkDataArray = [
      {to:"Beta",from:"Alpha",color:"blue"},
      {to:"Zeta",from:"Beta",color:"Black"}
    ];
    this.diagram.model = new go.GraphLinksModel(nodeDataArray,linkDataArray);
    this.diagram.nodeTemplate = 
    $(go.Node,"Auto",
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
  }

}
