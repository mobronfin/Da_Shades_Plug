import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ItemRetrieveByIdComponent } from './item.retreive.id.component';

describe('ItemRetrieveByIdComponent', () => {
  let component: ItemRetrieveByIdComponent;
  let fixture: ComponentFixture<ItemRetrieveByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRetrieveByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRetrieveByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
