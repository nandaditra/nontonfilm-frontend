import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteBorderComponent } from './favourite-border.component';

describe('FavouriteBorderComponent', () => {
  let component: FavouriteBorderComponent;
  let fixture: ComponentFixture<FavouriteBorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteBorderComponent]
    });
    fixture = TestBed.createComponent(FavouriteBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
