import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from '../item/item.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ItemCreateComponent } from '../item-create/item-create.component';
import { ItemDeleteComponent } from '../item-delete/item-delete.component';
import { ItemEditComponent } from '../item-edit/item-edit.component';
import { AuthGuard } from '../guard/auth-guard';

const routes: Routes = [{
  path: 'items',
  component: ItemListComponent,
  canActivate: [AuthGuard]
}, {
  path: 'items/:id',
  component: ItemComponent,
  canActivate: [AuthGuard]
}, {
  path: '',
  component: LoginComponent,
}, {
  path: 'register',
  component: RegisterComponent,
}, {
  path: 'create',
  component: ItemCreateComponent,
  canActivate: [AuthGuard]
}, {
  path: 'items/:id/delete',
  component: ItemDeleteComponent,
  canActivate: [AuthGuard]
}, {
  path: 'items/:id/edit',
  component: ItemEditComponent,
  canActivate: [AuthGuard]
}]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
