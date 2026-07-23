import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLink } from './project-link';

describe('ProjectLink', () => {
  let component: ProjectLink;
  let fixture: ComponentFixture<ProjectLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectLink],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectLink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
