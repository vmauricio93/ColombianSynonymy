// A partir del ejemplo de neode. Esto es un schema de con las propiedades de 'Lema'
//
// Cuando se crea un nuevo nodo de label 'Lema', neode solo leerá las propiedades 
// definidas en el schema (otras propiedades las descarta) y crea el nodo con las válidas

module.exports = {

    "idLema": {
        type : "number", // TODO: que sean enteros
        required : true
    },
    "lema": {
        type : "string",
        required : true,
        index : true
    },

    tiene: {
        type: "relationship",
        target: "Definicion",
        relationship: "TIENE",
        direction: "out"
    },

    es: {
        type: "relationship",
        target: "Lema",
        relationship: "ES",
        direction: "out"
    }
};