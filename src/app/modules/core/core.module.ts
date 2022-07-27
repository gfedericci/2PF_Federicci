import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { ToolbarComponent } from '../../layout/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { AlumnosService } from '../../services/alumnos.service';

@NgModule({
  declarations: [
    NavbarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavbarComponent,
    ToolbarComponent
  ],
  providers: [
    AlumnosService
  ]
})
export class CoreModule { }
