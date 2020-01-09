import { Component, OnInit } from '@angular/core';
import { IItem } from '../IItem';
import { ItemService } from '../item.service';
import { TokenStorageService } from '../jwt/token.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {


  items: IItem[];

  token: string;

  constructor(
    private itemService: ItemService,
    private tokenService: TokenStorageService
    ) { }

  ngOnInit() {
    this.itemService.getItems(100).subscribe(next => {
      this.items = next;
      console.log('success to get items');
    }, error => {
      console.log('fail to get items')
    })
  }
}
