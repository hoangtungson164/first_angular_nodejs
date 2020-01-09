import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemComponent } from '../item/item.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ItemCreateComponent } from '../item-create/item-create.component';
import { ItemDeleteComponent } from '../item-delete/item-delete.component';
import { ItemEditComponent } from '../item-edit/item-edit.component';
const routes = [{
        path: 'items',
        component: ItemListComponent,
    }, {
        path: 'items/:id',
        component: ItemComponent,
    }, {
        path: 'login',
        component: LoginComponent,
    }, {
        path: 'register',
        component: RegisterComponent,
    }, {
        path: 'create',
        component: ItemCreateComponent,
    }, {
        path: 'delete/:id',
        component: ItemDeleteComponent,
    }, {
        path: 'edit/:id',
        component: ItemEditComponent,
    }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        declarations: [],
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map