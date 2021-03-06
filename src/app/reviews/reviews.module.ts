import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseReviewsComponent } from './course-reviews/course-reviews.component';
import { ClarityModule } from 'clarity-angular';
import { PipeModule } from '../pipes/pipe.module';
import { ReviewComponent } from './review/review.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'angular2-markdown';
import { ReviewListComponent } from './review-list/review-list.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    PipeModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MarkdownModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [CourseReviewsComponent, ReviewComponent, ReviewListComponent],
  exports: [ReviewComponent, ReviewListComponent]
})
export class ReviewsModule { }
