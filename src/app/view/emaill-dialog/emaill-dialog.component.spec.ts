import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaillDialogComponent } from './emaill-dialog.component';

describe('EmaillDialogComponent', () => {
  let component: EmaillDialogComponent;
  let fixture: ComponentFixture<EmaillDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmaillDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmaillDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
