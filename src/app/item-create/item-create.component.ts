import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    hobby: new FormControl('', [Validators.required, Validators.minLength(3)]),
    job: new FormControl('', [Validators.required, Validators.minLength(3)]),
    country: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(
    private itemService: ItemService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  createItem() {
    const {value} = this.form;
    this.itemService.createItem(value).subscribe(next => {
      console.log('success to create new item');
      this.router.navigateByUrl('/items');
    }, error => {
      console.log('fail to create new item');
    })
  }


}
