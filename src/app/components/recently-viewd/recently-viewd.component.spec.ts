import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyViewdComponent } from './recently-viewd.component';

describe('RecentlyViewdComponent', () => {
  let component: RecentlyViewdComponent;
  let fixture: ComponentFixture<RecentlyViewdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyViewdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyViewdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
