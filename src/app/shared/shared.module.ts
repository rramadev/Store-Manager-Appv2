import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdSnackBarModule, MdChipsModule, MdInputModule, MdSlideToggleModule,
				 MdSliderModule, MdAutocompleteModule, MdIconModule, MdMenuModule,
				 MdDialogModule, MdGridListModule, MdCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingComponent } from './rating.component';

@NgModule({
	declarations: [RatingComponent],
	imports: [
    MdSnackBarModule,
		MdChipsModule,
		MdInputModule,
		MdSlideToggleModule,
		MdSliderModule,
		MdAutocompleteModule,
		MdIconModule,
		MdMenuModule,
		MdDialogModule,
		MdGridListModule,
		MdCardModule,
		BrowserAnimationsModule
  ],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RatingComponent,
		MdSnackBarModule,
		MdChipsModule,
		MdInputModule,
		MdSlideToggleModule,
		MdSliderModule,
		MdAutocompleteModule,
		MdMenuModule,
		MdIconModule,
		MdDialogModule,
		MdGridListModule,
		MdCardModule,
		BrowserAnimationsModule
	],
	providers: []
})
export class SharedModule { }
