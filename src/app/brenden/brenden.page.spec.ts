import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrendenPage } from './brenden.page';

describe('BrendenPage', () => {
  let component: BrendenPage;
  let fixture: ComponentFixture<BrendenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BrendenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
