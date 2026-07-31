import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandPresenseComponent } from './brand-presense.component';

describe('BrandPresenseComponent', () => {
  let component: BrandPresenseComponent;
  let fixture: ComponentFixture<BrandPresenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandPresenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandPresenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
