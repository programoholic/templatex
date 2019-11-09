import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptGeneratorComponent } from './script-generator.component';

describe('ScriptGeneratorComponent', () => {
  let component: ScriptGeneratorComponent;
  let fixture: ComponentFixture<ScriptGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
