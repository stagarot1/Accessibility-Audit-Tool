import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UrlInputComponent } from '../../components/url-input/url-input.component';
import { ResultsContainerComponent } from '../../components/results-container/results-container.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, UrlInputComponent, ResultsContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
