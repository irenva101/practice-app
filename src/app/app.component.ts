import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./form/form.component";
import { ThemeComponent } from "./theme/theme.component";
import { LoadProfileComponent } from './load-profile/load-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='Online store';
  subtitle='In the table bellow there will be a table with all the products.';
}
