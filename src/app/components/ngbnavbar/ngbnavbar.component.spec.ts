import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbnavbarComponent } from './ngbnavbar.component';

describe('NgbnavbarComponent', () => {
  let component: NgbnavbarComponent;
  let fixture: ComponentFixture<NgbnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgbnavbarComponent]
    });
    fixture = TestBed.createComponent(NgbnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
