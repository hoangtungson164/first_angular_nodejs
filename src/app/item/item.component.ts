import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IItem } from '../IItem';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: IItem;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getItemById(id);
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

}
