import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedFilmComponent } from './saved-film.component';

describe('SavedFilmComponent', () => {
  let component: SavedFilmComponent;
  let fixture: ComponentFixture<SavedFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedFilmComponent]
    });
    fixture = TestBed.createComponent(SavedFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
