import { Component } from '@angular/core';
import { OnChange } from 'property-watch-decorator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @OnChange<string>((value) => {
    console.log(value + '!!');
  })
  public name: string = 'Angular';
}
