import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS}  from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormAlumnoComponent } from './layout/form-alumno/form-alumno.component';
import { TableComponent } from './layout/table/table.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';
import { ABMModule } from './modules/abm/abm.module';
import { TableCursosComponent } from './layout/table-cursos/table-cursos.component';

const routes: Routes = [
  { path: 'listadoAlumnos', component: TableComponent },
  { path: 'listadoCursos', component: TableCursosComponent },
  { path: 'nuevo', component: FormAlumnoComponent },
  { path: 'editar/:index', component: FormAlumnoComponent },
  { path: 'detalle/:index', component: FormAlumnoComponent },
  { path: '', redirectTo: '/listadoAlumnos', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TableCursosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SharedModule,
    CoreModule,
    ABMModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-AR'},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
