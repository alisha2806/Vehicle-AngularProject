import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDesignsComponent } from './vehicle-designs/vehicle-designs.component';


const routes: Routes = [
  { path: 'vehicle', component: VehicleDesignsComponent },
  { path: '', component: VehicleDesignsComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
