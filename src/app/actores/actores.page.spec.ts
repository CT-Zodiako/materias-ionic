import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActoresPage } from './actores.page';

describe('ActoresPage', () => {
  let component: ActoresPage;
  let fixture: ComponentFixture<ActoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
