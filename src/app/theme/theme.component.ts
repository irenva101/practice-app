import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { Theme } from '../enums/theme.enum';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent {
  Theme=Theme;
  currentTheme: string='';
  constructor(public themeService: ThemeService) { 
    this.currentTheme=themeService.getTheme();
  }
  
  changeTheme(theme: string){
    if(theme==='light'){
      this.themeService.setTheme(Theme.Light);
      this.currentTheme=Theme.Light;
    }else if(theme==='dark'){
      this.themeService.setTheme(Theme.Dark);
      this.currentTheme=Theme.Dark;
    }else if(theme==='system'){
      this.currentTheme=Theme.System;
      this.themeService.setTheme(Theme.System);
    }
  }
}
