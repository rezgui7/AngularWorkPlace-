import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit{
  id = "No Param";
  constructor(private actR:ActivatedRoute){
  }
  ngOnInit(): void {
    this.id = this.actR.snapshot.params['id'];
  }

}
