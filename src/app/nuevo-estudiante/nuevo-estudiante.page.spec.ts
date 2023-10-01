import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoEstudiantePage } from './nuevo-estudiante.page';

describe('NuevoEstudiantePage', () => {
  let component: NuevoEstudiantePage;
  let fixture: ComponentFixture<NuevoEstudiantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
