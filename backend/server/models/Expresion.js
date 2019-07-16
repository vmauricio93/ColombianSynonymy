module.exports = {

    labels : ['Expresion','Lema'],

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