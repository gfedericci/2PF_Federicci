import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/alumno';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  action: string = 'listado';

  listadoAlumnos : Alumno[] = [];
  alumnoEditar!: Alumno;


  constructor(private httpClient: HttpClient) {
    this.reloadJson();
  }

  ngOnInit(): void {
    
  }

  setAction(action: string) {
    this.alumnoEditar = <Alumno>{};
    this.action = action;
  }

  reloadJson() {
    this.httpClient.get("assets/alumnos.json").subscribe(alumnos =>{
      this.listadoAlumnos = <Alumno[]> alumnos;
      this.listadoAlumnos.forEach((alumno, i) => alumno.index = i);
    });
  }

  editAlumno(index: number) {
    this.alumnoEditar = this.listadoAlumnos[index];
    this.alumnoEditar.index = index;
    console.log(this.alumnoEditar);
    this.action = 'editar';
  }

  addAlumno(alumno: Alumno) {
    this.listadoAlumnos.push(alumno);
    
    this.setAction('listado');
  }

  removeAlumno(index: number) {
    this.listadoAlumnos.splice(index, 1);
  }

  updateAlumno(alumno: Alumno) {
    console.log(alumno);
    this.listadoAlumnos[alumno.index] = alumno;

    this.setAction('listado');
  }
}
