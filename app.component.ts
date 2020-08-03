import { Component } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gojsPractice';
  public model: go.TreeModel = new go.TreeModel(
    [
      { 'key': 1, 'name': 'Stella Payne Diaz', 'title': 'CEO' },
      { 'key': 2, 'name': 'Luke Warm', 'title': 'VP Marketing/Sales', 'parent': 1 },
      { 'key': 3, 'name': 'Meg Meehan Hoffa', 'title': 'Sales', 'parent': 2 }
    ]
  );
}
