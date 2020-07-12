import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

import { MatDialog } from "@angular/material/dialog";

import { ProductDeleteDialogComponent } from "../product-delete-dialog/product-delete-dialog.component";

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {
  products: Product[];

  displayedColumns = ["id", "name", "price", "action"];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductDeleteDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
