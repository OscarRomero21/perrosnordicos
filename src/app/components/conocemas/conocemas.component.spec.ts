import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocemasComponent } from './conocemas.component';

describe('ConocemasComponent', () => {
  let component: ConocemasComponent;
  let fixture: ComponentFixture<ConocemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConocemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConocemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
