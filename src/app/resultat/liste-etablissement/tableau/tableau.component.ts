import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent {
  
  data: any // Déclarez une propriété pour stocker les données

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const dataString = params.get('data'); // Récupérer le paramètre 'data'
      if (dataString) {
        this.data = JSON.parse(dataString)// Décoder et désérialiser les données
        console.log(this.data );
      }
    });
  }
}
