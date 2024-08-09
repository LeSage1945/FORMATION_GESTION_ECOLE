import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcoleComponent } from './ecole/ecole.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ActionEcoleComponent } from './ecole/action-ecole/action-ecole.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormulaireComponent } from './resultat/formulaire/formulaire.component';

@NgModule({
  declarations: [
    AppComponent,
    EcoleComponent,
    HeaderComponent,
    FooterComponent,
    ActionEcoleComponent,
    AcceuilComponent,
    FormulaireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
