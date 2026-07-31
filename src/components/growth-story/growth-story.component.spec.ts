import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthStoryComponent } from './growth-story.component';

describe('GrowthStoryComponent', () => {
  let component: GrowthStoryComponent;
  let fixture: ComponentFixture<GrowthStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowthStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowthStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
