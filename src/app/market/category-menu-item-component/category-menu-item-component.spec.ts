import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMenuItemComponent } from './category-menu-item-component';

describe('CategoryMenuItemComponent', () => {
  let component: CategoryMenuItemComponent;
  let fixture: ComponentFixture<CategoryMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryMenuItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryMenuItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
