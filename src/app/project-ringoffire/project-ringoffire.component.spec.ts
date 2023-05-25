import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRingoffireComponent } from './project-ringoffire.component';

describe('ProjectRingoffireComponent', () => {
  let component: ProjectRingoffireComponent;
  let fixture: ComponentFixture<ProjectRingoffireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectRingoffireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectRingoffireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
