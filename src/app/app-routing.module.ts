import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeComponent } from './components/change-component/change.component';
import { AuthorComponent } from './components/author/author.component';

const routes: Routes = [
  {path: 'zamien', component: ChangeComponent},
  {path: 'autor', component: AuthorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
