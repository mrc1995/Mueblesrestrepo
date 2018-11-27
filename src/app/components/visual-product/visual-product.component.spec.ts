import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualProductComponent } from './visual-product.component';

describe('VisualProductComponent', () => {
  let component: VisualProductComponent;
  let fixture: ComponentFixture<VisualProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
