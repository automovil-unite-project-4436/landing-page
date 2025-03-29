import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCarsPageComponent } from './popular-cars-page.component';

describe('PopularCarsPageComponent', () => {
  let component: PopularCarsPageComponent;
  let fixture: ComponentFixture<PopularCarsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularCarsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularCarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
