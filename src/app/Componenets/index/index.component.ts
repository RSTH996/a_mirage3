import { Component} from '@angular/core';
import { Metadata } from "../Datos/Personal";
import { Inicio, Creacion, Avance, Combate, Curiosidades, Jubilacion } from '../Datos/Informacion'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  Numero:string="0";
  Imagen1 = Metadata.imgF;
  Imagen2 = Metadata.imgT; 
  
  lista= [Inicio, Creacion, Avance, Combate, Jubilacion, Curiosidades];  
  arreglo = this.lista[parseInt(this.Numero)];

  cambio(Nuevo : string){        
    this.Numero = Nuevo;        
    if (this.Numero != "6") {
      this.arreglo = this.lista[parseInt(this.Numero)];      
    }else{
      this.Vista();
      window.location.reload();      
    };    
  };
  
  Vista(){
    window.scrollTo(0,0)
  }
}
