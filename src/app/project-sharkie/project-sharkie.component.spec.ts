import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSharkieComponent } from './project-sharkie.component';

describe('ProjectSharkieComponent', () => {
  let component: ProjectSharkieComponent;
  let fixture: ComponentFixture<ProjectSharkieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSharkieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSharkieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
