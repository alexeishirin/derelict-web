/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditHexComponent } from './edit-hex.component';

describe('EditHexComponent', () => {
  let component: EditHexComponent;
  let fixture: ComponentFixture<EditHexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
