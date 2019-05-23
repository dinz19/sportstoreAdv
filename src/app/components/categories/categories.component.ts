import { Component, OnInit } from '@angular/core';
import { StoreService} from 'src/app/services/store.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {
  category: any;
  categoryCnt : any;
  constructor(private storeService : StoreService) { }

  ngOnInit() {
   //this.category = this.storeService.displayCategoriesCount();
   this.categoryCnt = this.storeService.displayCategoriesCount();
   this.category = this.storeService.displayCategories();
  }


}
