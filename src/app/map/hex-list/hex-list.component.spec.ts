/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HexListComponent } from './hex-list.component';

describe('HexListComponent', () => {
  let component: HexListComponent;
  let fixture: ComponentFixture<HexListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
