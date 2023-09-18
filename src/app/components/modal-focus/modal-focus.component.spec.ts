import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFocusComponent } from './modal-focus.component';

describe('ModalFocusComponent', () => {
  let component: ModalFocusComponent;
  let fixture: ComponentFixture<ModalFocusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalFocusComponent]
    });
    fixture = TestBed.createComponent(ModalFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
