import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarpeliculaPage } from './editarpelicula.page';

describe('EditarpeliculaPage', () => {
  let component: EditarpeliculaPage;
  let fixture: ComponentFixture<EditarpeliculaPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(EditarpeliculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
