import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRetrieveComponent } from './item.retreive.component';

describe('ItemRetrieveComponent', () => {
  let component: ItemRetrieveComponent;
  let fixture: ComponentFixture<ItemRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRetrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
