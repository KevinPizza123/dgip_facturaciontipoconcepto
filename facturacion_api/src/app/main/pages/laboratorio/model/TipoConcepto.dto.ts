export class TipoConceptoDto {
    descTipoConcepto: string;
    fechaTc: Date;
    idTipoConcepto: number;
    idUnidadTc: number;
    idUsuarioTc: number;
    nombreTipoConcepto: string;
    prtidaNc: number;
    //estadoTc: string;
  

    //estado:boolean;

    fechaTxt: string
    
    constructor(data: TipoConceptoDto) {
      this.descTipoConcepto = data.descTipoConcepto;
      this.fechaTc = data.fechaTc;
      this.idTipoConcepto = data.idTipoConcepto;
      this.idUnidadTc = data.idUnidadTc;
      this.idUsuarioTc = data.idUsuarioTc;
      this.nombreTipoConcepto = data.nombreTipoConcepto;
      this.prtidaNc = data.prtidaNc;
      //this.estadoTc = data.estadoTc;
    }
  }
  