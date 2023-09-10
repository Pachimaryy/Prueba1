import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaqueteDetailPage } from './PaqueteDetailPage';

describe('PaqueteDetailPage', () => {
  let component: PaqueteDetailPage;
  let fixture: ComponentFixture<PaqueteDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaqueteDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
