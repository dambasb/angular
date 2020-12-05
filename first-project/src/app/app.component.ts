import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedFeature = 'recipes';

  onNavigated(feature: string) {
    this.loadedFeature = feature;
  }
}
