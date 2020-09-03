import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  locations: string[] = ['Downtown', 'Foothills', 'Lakeside'];
  volunteerFrom: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.volunteerFrom = this.fb.group({
      name: 'Name here',
      phoneNumber: '',
      preferredLocation: '',
      animals: this.fb.group({
        dogs: false,
        cats: false,
        reptiles: false
      }),
      references: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  onSubmit(): void {
    console.log(this.volunteerFrom);
  }

  selectLocation(event): void {
    this.volunteerFrom.patchValue({
      preferredLocation: event.target.value
    });
  }

  addEmail(): void {
    this.references.push(this.fb.control(''));
  }

  removeEmail(index: number): void {
    this.references.removeAt(index);
  }


  get references(): FormArray {
    return this.volunteerFrom.get('references') as FormArray;
  }


}
