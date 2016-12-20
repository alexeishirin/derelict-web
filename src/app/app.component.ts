import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  public path: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    router.events.subscribe((data) => {
      this.path = data.url.substr(1);
    });
  }
}
