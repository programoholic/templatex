import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultScriptComponent } from './result-script.component';

describe('ResultScriptComponent', () => {
  let component: ResultScriptComponent;
  let fixture: ComponentFixture<ResultScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
