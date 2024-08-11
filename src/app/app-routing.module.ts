import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcoleComponent } from './ecole/ecole.component';
import { ActionEcoleComponent } from './ecole/action-ecole/action-ecole.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormulaireComponent } from './resultat/formulaire/formulaire.component';
import { ListeEtablissementComponent } from './resultat/liste-etablissement/liste-etablissement.component';

const routes: Routes = [
  {path: 'ecole', component: EcoleComponent},
  {path: 'actionEcole', component: ActionEcoleComponent},
  {path: 'ecole/form/:action/:IDECOLE', component: ActionEcoleComponent},
  {path: 'ecole/form', component: ActionEcoleComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'verification', component: FormulaireComponent},
  {path: 'etablissement/liste', component: ListeEtablissementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
