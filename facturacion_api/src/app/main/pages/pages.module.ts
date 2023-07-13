import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
/*Modulos*/


import {DashboardModule} from "../dashboard/module/dashboard.module";
import {ProductService} from "../dashboard/services/productservice";
import { ConceptoLiquidacionComponent } from './laboratorio/components/concepto-liquidacion/concepto-liquidacion.component';
import {InputSwitchModule} from "primeng/inputswitch";
import {InputNumberModule} from "primeng/inputnumber";
import {PrimengModule} from "../../primeng/primeng.module";
import { ConceptoLiquidacionTableComponent } from './laboratorio/components/concepto-liquidacion-table/concepto-liquidacion-table.component';
import { CretencionComponent } from './laboratorio/components/cretencion/cretencion.component';
import { CretencionTableComponent } from './laboratorio/components/cretencion-table/cretencion-table.component';
import { EntidadModule } from './laboratorio/module/entidad.module';
import { TipoConceptoComponent } from './laboratorio/components/tipo-concepto/tipo-concepto.component';
import { TipoConceptoTableComponent } from './laboratorio/components/tipo-concepto-table/tipo-concepto-table.component';





@NgModule({
    declarations: [


TipoConceptoTableComponent,
TipoConceptoComponent,
    ConceptoLiquidacionComponent,
        ConceptoLiquidacionTableComponent,
        CretencionComponent,
        CretencionTableComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        EntidadModule,
        DashboardModule,
        InputSwitchModule,
        InputNumberModule,
        PrimengModule,


    ],

    providers: [ProductService]
})
export class PagesModule{
}
