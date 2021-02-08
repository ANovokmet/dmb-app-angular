import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

interface Page {
  index?: number;
  display: string;
  disabled: boolean;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  /**
   * 0-based index of the active page
   */
  @Input()
  active: number;

  /**
   * total number of pages
   */
  @Input()
  total: number;

  @Output()
  selectPage = new EventEmitter<number>();

  pages = [];

  constructor() { }

  ngOnInit(): void {
    this.createPages();
  }

  ngOnChanges({ active, total }: SimpleChanges): void {
    if (active || total) {
      this.createPages();
    }
  }

  /**
   * Creates appropriate page links, and collapses numbers with `...` where appropriate.
   */
  createPages(): void {
    const pages = [];
    const lastIndex = this.total - 1;
    const firstIndex = 0;
    const index = this.active;

    pages.push(firstIndex);

    if (index - firstIndex > 1) {
      // collapse left -> 0...1
      pages.push('...');
      pages.push(index);
    } else if (index - firstIndex === 1) {
      // one next to another -> 0,1
      pages.push(index);
    }

    if (lastIndex - index > 1) {
      // collapse right -> M...N
      pages.push('...');
      pages.push(lastIndex);
    } else if (lastIndex - index === 1) {
      // one next to another -> N-1,N
      pages.push(lastIndex);
    }

    this.pages = pages;
  }

  onPageSelected(num: number): boolean {
    if (num >= 0 && num < this.total) {
      this.selectPage.next(num);
    }
    return false;
  }

}
