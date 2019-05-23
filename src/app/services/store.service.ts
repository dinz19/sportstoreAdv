import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class StoreService {

  Product : any = []
 
  products: Product[] = [
    new Product(1, "IBM", "Laptops", "IBM (Laptops)", 100),
    new Product(2, "Apple", "Laptops", "Apple (Laptops)", 100),
    new Product(3, "HP", "Laptops", "HP (Laptops)", 100),
    new Product(4, "Lenovo", "Laptops", "Lenovo (Laptops)", 100),
    new Product(5, "HCL", "Laptops", "HCL (Laptops)", 100),
    new Product(6, "Wipro", "Tablets", "Wipro (Tablets)", 100),
    new Product(7, "Huwei", "Tablets", "Huwei (Tablets)", 100),
    new Product(8, "Toshiba", "Tablets", "Toshiba (Tablets)", 100),
    new Product(9, "Acer", "Tablets", "Acer (Tablets)", 100),
    new Product(10, "Dell", "Tablets", "Dell (Tablets)", 100),
    new Product(11, "Maxim", "Gadgets", "Maxim (Gadgets)", 100),
    new Product(12, "Micromax", "Gadgets", "Micromax (Gadgets)", 100),
    new Product(13, "Samsung", "Gadgets", "Samsung (Gadgets)", 100),
    new Product(14, "XWing", "Gadgets", "XWing (Gadgets)", 100),
    new Product(15, "Google", "Gadgets", "Google (Gadgets)", 100),
    ];
    

  displayCategoriesCount() {
    //return Array.from(new Set(this.products.map(x=>x.category)));    
    return Array.from(new Set(this.products.map(x=>x.category))).length;  
  }

  displayProductsCount(){
    return this.products.length;  
  }

  displayCategories() {
    //return Array.from(new Set(this.products.map(x=>x.category)));    
    return Array.from(new Set(this.products.map(x=>x.category)));  
  }

  displayProducts(){
    return this.products.length;  
  }


  constructor() { }
}

class Product{
  
  id: number;
  productName: string;
  category: string;
  prodDesc: string;
  count: number;

  constructor(id,productName ,category, prodDesc, count) { 
    this.id = id;
    this.productName= productName;
    this.category = category;
    this.prodDesc = prodDesc;
    this.count = count;
  } 
}
