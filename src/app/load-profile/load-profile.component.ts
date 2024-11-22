import { Component } from '@angular/core';
import data from '../jsons/data.json';
import columns from '../jsons/header.json';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-load-profile',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './load-profile.component.html',
  styleUrl: './load-profile.component.css'
})
export class LoadProfileComponent {
  data=data;
  columns=columns;
}
