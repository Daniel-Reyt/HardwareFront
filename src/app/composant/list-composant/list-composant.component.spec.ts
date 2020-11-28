import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComposantComponent } from './list-composant.component';

describe('ListComposantComponent', () => {
  let component: ListComposantComponent;
  let fixture: ComponentFixture<ListComposantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComposantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
