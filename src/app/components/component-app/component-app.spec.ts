import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentApp } from './component-app';

describe('ComponentApp', () => {
  let component: ComponentApp;
  let fixture: ComponentFixture<ComponentApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
