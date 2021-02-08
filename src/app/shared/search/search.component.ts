import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  control = new FormControl();
  subscription: Subscription;

  @Input()
  set value(v) {
    this.control.setValue(v, { emitEvent: false });
  }

  @Output()
  search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.subscription = this.control.valueChanges.pipe(debounceTime(300)).subscribe(v => {
      this.search.emit(v);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
