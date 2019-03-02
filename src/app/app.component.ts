import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  _num;
  get num() {
    return Math.random();
    //return this._num;
  }
  /**
     constructor(zone: NgZone) {
      console.log(zone);
        this._num = Math.random();
        zone.runOutsideAngular(() => {
            setInterval(() => {
                this._num = Math.random();
            }, 100);
        });
    }
   */
}
