import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NplPremierDivisionComponent } from './npl-premier-division.component';

describe('NplPremierDivisionComponent', () => {
  let component: NplPremierDivisionComponent;
  let fixture: ComponentFixture<NplPremierDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NplPremierDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NplPremierDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
