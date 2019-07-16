// Modelo de datos en el front end
export class Lema {

    constructor(_id = '',idLema = null, lema = '') {
        this._id = _id;
        this.idLema = idLema;
        this.lema = lema;
    }

    _id : string;
    idLema : number;
    lema : string;
}
