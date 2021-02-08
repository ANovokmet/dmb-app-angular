import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('collapsed pages', () => {
    it('case 1', () => {
      component.active = 0;
      component.total = 10;
      component.createPages();
      expect(component.pages).toEqual([0, '...', 9]);
    });
  
    it('case 2', () => {
      component.active = 1;
      component.total = 10;
      component.createPages();
      expect(component.pages).toEqual([0, 1, '...', 9]);
    });
  
    it('case 3', () => {
      component.active = 2;
      component.total = 10;
      component.createPages();
      expect(component.pages).toEqual([0, '...', 2, '...', 9]);
    });
  
    it('case 4', () => {
      component.active = 8;
      component.total = 10;
      component.createPages();
      expect(component.pages).toEqual([0, '...', 8, 9]);
    });
  
    it('case 5', () => {
      component.active = 9;
      component.total = 10;
      component.createPages();
      expect(component.pages).toEqual([0, '...', 9]);
    });
  });

  describe('uncollapsed pages', () => {
    it('case 1', () => {
      component.active = 0;
      component.total = 3;
      component.createPages();
      expect(component.pages).toEqual([0, '...', 2]);
    });
  
    it('case 2', () => {
      component.active = 1;
      component.total = 3;
      component.createPages();
      expect(component.pages).toEqual([0, 1, 2]);
    });
  
    it('case 3', () => {
      component.active = 2;
      component.total = 3;
      component.createPages();
      expect(component.pages).toEqual([0, '...', 2]);
    });

    it('case 4', () => {
      component.active = 1;
      component.total = 2;
      component.createPages();
      expect(component.pages).toEqual([0, 1]);
    });
  });
});
