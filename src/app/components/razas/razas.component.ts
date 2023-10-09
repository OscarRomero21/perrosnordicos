import { Component, OnInit } from '@angular/core';
import { RazasService } from '../../services/razas.service';
import { Razas } from '../../models/razas';

@Component({
  selector: 'app-razas',
  templateUrl: './razas.component.html',
  styleUrls: ['./razas.component.css']
})
export class RazasComponent implements OnInit {
  razas: Razas[] = [];  

  constructor(private razasService: RazasService) {}

  ngOnInit() {
    this.obtenerRazas();
  }

  obtenerRazas() {
    this.razasService.getRaza().subscribe(data => {
      this.razas = data;
    });
  }

}
