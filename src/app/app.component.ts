import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from './store';
import { selectError } from '@store/user/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dmb-application';

  error$ = this.store$.select(selectError);

  constructor(private store$: Store<State>) {}
}
