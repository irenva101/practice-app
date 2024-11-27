import { Component, OnInit } from '@angular/core';
import data from '../jsons/data.json';
import columns from '../jsons/header.json';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-load-profile',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './load-profile.component.html',
  styleUrl: './load-profile.component.scss'
})
export class LoadProfileComponent implements OnInit{
  data=data;


  ngOnInit(): void {
    const tableContainer = document.querySelector(
      '.table-container',
    ) as HTMLElement;
    if (tableContainer) {
      tableContainer.addEventListener('wheel', (event: WheelEvent) => {
        if (event.deltaY > 0) {
          tableContainer.scrollLeft += 100;
        } else {
          tableContainer.scrollLeft -= 100;
        }
        event.preventDefault();
      });
    }

    this.getData(); 
  }

  getData(){
    this.data=data;
  }
}
