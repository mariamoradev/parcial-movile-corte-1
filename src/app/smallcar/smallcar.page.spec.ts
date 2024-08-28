import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmallcarPage } from './smallcar.page';

describe('SmallcarPage', () => {
  let component: SmallcarPage;
  let fixture: ComponentFixture<SmallcarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallcarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
