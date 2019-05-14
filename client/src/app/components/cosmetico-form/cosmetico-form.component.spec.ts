import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticoFormComponent } from './cosmetico-form.component';

describe('CosmeticoFormComponent', () => {
  let component: CosmeticoFormComponent;
  let fixture: ComponentFixture<CosmeticoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
