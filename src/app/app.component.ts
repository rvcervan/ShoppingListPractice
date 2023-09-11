import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingList';
  shopping: boolean = false;
  recipe: boolean = true;

  onSelect(feature: string){
    if(feature === 'recipe'){
      this.recipe = true;
      this.shopping = false;
    }
    else if(feature === 's_list'){
      this.shopping = true;
      this.recipe = false;
    }
    else{
      this.recipe = true;
      this.shopping = true;
    }
  }

}
