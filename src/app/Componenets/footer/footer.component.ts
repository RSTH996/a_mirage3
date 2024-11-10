import { Component } from '@angular/core';
import { Metadata } from "../Datos/Personal";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  Descripcion = Metadata.description;
  Autor = Metadata.author;
}
