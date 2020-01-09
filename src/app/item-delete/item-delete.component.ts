import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IItem } from '../IItem';

@Component({
  selector: 'app-item-delete',
  templateUrl: './item-delete.component.html',
  styleUrls: ['./item-delete.component.css']
})
export class ItemDeleteComponent implements OnInit {

  item: IItem;

  itemId: number;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getItemById(id);
    this.itemId = id;
  }

  getItemById(id: number) {
    this.itemService.getItemById(id).subscribe(next => {
      this.item = next;
      console.log(this.item)
      console.log('success to get item ' + next.name);
    }, error => {
      console.log('fail to get item');
    });
  }

  deleteItem() {
    this.itemService.deleteItem(this.itemId).subscribe(next => {
      this.router.navigateByUrl("/items").then(success => console.log("success to delete item"))
    }, error => {
      console.log("fail to delete item")
    })
  }



}
