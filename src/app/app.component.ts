import { Component } from '@angular/core';
import { Empleados } from './models/empleados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GIT';
  //cambiar aqui
  empleadosArray: Empleados []=[
    {id:1, name:"Dani", country:"España", years:"20"},
    {id:2, name:"Javi", country:"España", years:"47"},
    {id:3, name:"Jhon", country:"Inglaterra", years:"23"}
];

 empleadoSeleccionado: Empleados = new Empleados();
 headers = Object.keys(this.empleadosArray[0])

 editar(){
   if(this.empleadoSeleccionado.id === 0){
    this.empleadoSeleccionado.id = this.empleadosArray.length +1;
    this.empleadosArray.push(this.empleadoSeleccionado)
   }
   
   //limpiar
   this.empleadoSeleccionado = new Empleados();
 }
 abrirEditar(empleados: Empleados){
   this.empleadoSeleccionado = empleados;
 }
 eliminar(){
   if(confirm('Estas seguro de eliminarlo?')){
    
    this.empleadoSeleccionado = new Empleados();
   }
}
    
}