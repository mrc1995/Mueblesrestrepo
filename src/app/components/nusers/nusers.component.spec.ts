import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NusersComponent } from './nusers.component';

describe('NusersComponent', () => {
  let component: NusersComponent;
  let fixture: ComponentFixture<NusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
