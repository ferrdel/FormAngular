import { Component, OnInit } from '@angular/core';
import { NservService } from '../../services/nserv.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent  implements OnInit{
  products: any[]=[];

  constructor(private nService : NservService){}

  ngOnInit(): void {
    this.nService.getAll().subscribe(
      (data) => {
        this.products = data;
      },
      (error) =>{
        console.error("---> ERROR DE DATOS!::: ",error);
      }
    )
  }

}
