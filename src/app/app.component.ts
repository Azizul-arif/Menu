import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuListComponent } from "./menu-list/menu-list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Menu';
}
