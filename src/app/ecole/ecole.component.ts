import { Component } from '@angular/core';
import { EcoleService } from '../service/ecole.service';
import { Router } from '@angular/router';
import { modelEcole } from '../model/modelEcole';

@Component({
  selector: 'app-ecole',
  templateUrl: './ecole.component.html',
  styleUrls: ['./ecole.component.scss']
})
export class EcoleComponent {
  elements : any;
  isLoading!: boolean;


  constructor(
    private service: EcoleService,
    private router: Router,
  ) {}

  ngOnInit(){
    this.getecole();
  }

  getecole() {
    this.isLoading = true
    return this.service.getallecole().subscribe((data) =>{
      console.log(data);
      this.elements = data
      this.isLoading = false
    })
  }

  delete(element: modelEcole): void{
    alert()
    prompt("voulez-vous supprimer l'echelon ?")
    this.service.supprimer(element.IDECOLES).subscribe((data) =>{
      console.log(data);
      this.getecole();
    })
  }
  
  public edit(ID: number) {
    this.router.navigateByUrl('ecole/form/edit/' + ID)
  }
  
  public view(ID: number) {
    this.router.navigateByUrl('ecole/form/view/' + ID)
  }
}
