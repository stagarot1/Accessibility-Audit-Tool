import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-url-input',
  imports: [ReactiveFormsModule],
  templateUrl: './url-input.component.html',
  styleUrl: './url-input.component.scss'
})
export class UrlInputComponent {
  protected readonly form: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      url: ['', [Validators.required, Validators.pattern(/^https?:\/\//i)]]
    });
  }

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const url = this.form.value.url?.trim() ?? '';
    console.info('Submitted URL:', url);
  }
}
