import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild("nameInput", {static: false})
  name: ElementRef

  @ViewChild("amountInput", {static: false})
  amount: ElementRef

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIng(){
    this.slService.addIngredient(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }

}
