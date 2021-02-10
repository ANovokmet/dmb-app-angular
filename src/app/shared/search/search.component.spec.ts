import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [
        RouterModule,
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire one event for multiple changes', (done) => {
    const elem = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    spyOn(component.search, 'emit');
    
    elem.value = 'something';
    elem.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    elem.value = 'else';
    elem.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    
    fixture.whenStable().then(() => {
      expect(component.search.emit).toHaveBeenCalledTimes(1);
      done();
    });
  });

  it('should not fire event for input change', (done) => {
    spyOn(component.search, 'emit');

    component.value = 'query';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.search.emit).not.toHaveBeenCalled();
      done();
    });
  });
});
