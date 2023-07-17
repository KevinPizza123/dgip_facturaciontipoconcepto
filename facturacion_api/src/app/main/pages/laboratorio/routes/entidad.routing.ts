import {Routes} from '@angular/router';

import {AuthGuard} from "../../../../_guards/auth.guard";

import {EntidadComponent} from "../components/entidad/entidad.component";
import {BancosComponent} from "../components/bancos/bancos.component";
import {ConceptoLiquidacionComponent} from "../components/concepto-liquidacion/concepto-liquidacion.component";
import {CretencionComponent} from "../components/cretencion/cretencion.component";
import { TipoConceptoComponent } from '../components/tipo-concepto/tipo-concepto.component';


export const RUTA_ENTIDAD: Routes = [

    {
        path: 'entidad',
        component: EntidadComponent,
        canActivate: [AuthGuard],
    },

    {
        path: 'bancos',
        component: BancosComponent,
        canActivate: [AuthGuard],
    },

    {
        path: 'conceptoLiquidacion',
        component: ConceptoLiquidacionComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'cretencion',
        component: CretencionComponent,
        canActivate: [AuthGuard],
    },

    {
        path: 'tipoConcepto',
        component: TipoConceptoComponent,
        canActivate: [AuthGuard],
    }
    
    



];
