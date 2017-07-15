import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WesterosComponent } from './westeros.component';

describe('WesterosComponent', () => {
  let component: WesterosComponent;
  let fixture: ComponentFixture<WesterosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WesterosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WesterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
