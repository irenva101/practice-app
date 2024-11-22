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
  timeColumns = [
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30"
  ];
}
