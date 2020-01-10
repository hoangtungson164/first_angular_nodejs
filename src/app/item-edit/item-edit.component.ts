import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IItem } from '../IItem';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

item: IItem;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')
    this.getItemById(id);
  }

  getItemById(id: number) {
    this.itemService.getItemById(id).subscribe(next => {
      this.item = next;
      console.log(this.item.id)
    }, error => {
      console.log('fail to get item');
    });
  }

  updateItem() {
    this.itemService.updateItem(this.item).subscribe(next => {
      console.log('success to update item');
      this.router.navigateByUrl('/items');
    }, error => {
      console.log('fail to create new item');
    })
  }


}
