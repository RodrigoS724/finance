import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidevar.html',
  styleUrls: ['./sidevar.css']
})
export class sidevar {
  items = ['FACTURAR','BUSCAR F.','LISTAR COMPROBANTES','CAJA','TAREAS','INVENTARIO','CLIENTES','DATOS','PROVEEDORES','AJUSTES'];
}
