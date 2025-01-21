import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UploadComponent } from './upload/upload.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='Online store';
  subtitle='In the table bellow there will be a table with all the products.';
}
