import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
<div class="loader d-flex justify-content-center position-absolute w-100 h-100 align-items-center">
  <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
  </div>
</div>
`,
  styles: [`
.loader {
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.8);
  min-height: 200px;
}
`]
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
