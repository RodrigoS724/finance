import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  buttons = ['FACTURAR','BUSCAR F.','LISTAR COMPROBANTES','CAJA','TAREAS','INVENTARIO','CLIENTES','DATOS','PROVEEDORES','AJUSTES'];
}
