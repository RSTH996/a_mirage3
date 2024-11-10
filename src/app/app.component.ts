import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from "@angular/router";
import { IndexComponent } from "./Componenets/index/index.component";
import { NavbarComponent } from "./Componenets/navbar/navbar.component";
import { FooterComponent } from "./Componenets/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, IndexComponent, NavbarComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { 
  Pestana = "Mirage 3"
}
