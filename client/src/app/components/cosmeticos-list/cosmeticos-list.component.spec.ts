import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticosListComponent } from './cosmeticos-list.component';

describe('CosmeticosListComponent', () => {
  let component: CosmeticosListComponent;
  let fixture: ComponentFixture<CosmeticosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
