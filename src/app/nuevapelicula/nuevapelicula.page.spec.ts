import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevapeliculaPage } from './nuevapelicula.page';

describe('NuevapeliculaPage', () => {
  let component: NuevapeliculaPage;
  let fixture: ComponentFixture<NuevapeliculaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevapeliculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
