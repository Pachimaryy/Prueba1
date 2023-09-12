import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepartidorDetailPage } from './repartidor-detail.page';

describe('RepartidorDetailPage', () => {
  let component: RepartidorDetailPage;
  let fixture: ComponentFixture<RepartidorDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RepartidorDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
