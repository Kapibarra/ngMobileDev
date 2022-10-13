import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageruComponent } from './homepageru.component';

describe('HomepageruComponent', () => {
  let component: HomepageruComponent;
  let fixture: ComponentFixture<HomepageruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
