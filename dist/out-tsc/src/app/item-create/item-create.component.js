import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let ItemCreateComponent = class ItemCreateComponent {
    constructor(itemService, router) {
        this.itemService = itemService;
        this.router = router;
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(3)]),
            hobby: new FormControl('', [Validators.required, Validators.minLength(3)]),
            job: new FormControl('', [Validators.required, Validators.minLength(3)]),
            country: new FormControl('', [Validators.required, Validators.minLength(3)])
        });
    }
    ngOnInit() {
    }
    createItem() {
        const { value } = this.form;
        this.itemService.createItem(value).subscribe(next => {
            console.log('success to create new item');
            this.router.navigateByUrl('/items');
        }, error => {
            console.log('fail to create new item');
        });
    }
};
ItemCreateComponent = tslib_1.__decorate([
    Component({
        selector: 'app-item-create',
        templateUrl: './item-create.component.html',
        styleUrls: ['./item-create.component.css']
    })
], ItemCreateComponent);
export { ItemCreateComponent };
//# sourceMappingURL=item-create.component.js.map