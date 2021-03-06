import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClarityModule } from 'clarity-angular';
import { RouterTestingModule } from '@angular/router/testing';

import { CoursesComponent } from './courses.component';
import { PipeModule } from '../pipes/pipe.module';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CourseService } from '../courses/course.service';
class MockCourse {
  getCourses() {
    return new BehaviorSubject(null);
  }
}

import { GradeService } from '../grades/grade.service';
class MockGrade {
  getCourses() {

  }
  getGrades() {

  }
}

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PipeModule, ClarityModule, RouterTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [{ provide: CourseService, useClass: MockCourse }, { provide: GradeService, useClass: MockGrade }],
      declarations: [CoursesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
