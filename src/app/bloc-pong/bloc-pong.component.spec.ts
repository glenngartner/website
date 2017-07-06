import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocPongComponent } from './bloc-pong.component';

describe('BlocPongComponent', () => {
  let component: BlocPongComponent;
  let fixture: ComponentFixture<BlocPongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocPongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocPongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
