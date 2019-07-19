//Refactoring (reemplazar todas las instancias de Lema?)
export class Entrada {

    constructor(
        _id = '',idLema = null,
        lema = '', 
        expresiones? : [], 
        expresionDe? : [], 
        varianteDe? : [], 
        definiciones? : {}, 
        sinonimos? : []
        ) {
            this._id = _id;
            this.idLema = idLema;
            this.lema = lema;
            this.expresiones = expresiones;
            this.expresionDe = expresionDe;
            this.varianteDe = varianteDe;
            this.definiciones = definiciones;
            this.sinonimos = sinonimos;
        }

    _id : string;
    idLema : number;
    lema : string;
    expresiones : string[];
    expresionDe : string[];
    varianteDe : string[];
    definiciones : object;
    sinonimos : string[];
    
}