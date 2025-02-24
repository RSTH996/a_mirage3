import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from "@angular/router";
import rutas from "./app/app.routes";

bootstrapApplication(AppComponent, {
  providers:[
    provideRouter(rutas)
  ]
})
  .catch((err) => console.error(err));
