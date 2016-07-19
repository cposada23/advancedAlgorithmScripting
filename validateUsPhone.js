

function telephoneCheck(str) {
    // Good luck!
    /**
     * ^                    -> Denota el inicio del string
     * ?                    -> Puede existir o no
     * ^1                   -> En el inicio del string debe haber un uno
     * ^(1\s)               -> En el inicio del string puede haber un uno seguido de un espacio en blanco
     * ^(1\s?)              -> En el inicio debe haber un uno que puede estar seguido por un espacio en blanco
     * ^(1\s?)?             -> Puede que en el inicio del string exista un 1 seguido o no de un espacio en blanco
     * \                    -> Escaping caracter
     * \(                   -> Valida un parentesis (
     * \d{3} || [0-9]{3}    -> Tres digitos enteros consecutivos
     * [\s\-]               -> Puede haber un espacio en blanco o un guion -
     * $                    -> Termina la cadena para no validar mas a partir de ahí
     */
    var regex =/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/g;


    return regex.test(str);
}



console.log("1"+telephoneCheck("555-555-5555"));
console.log("2"+telephoneCheck("(555)555-5555"));
console.log("3"+telephoneCheck("1(555)555-5555"));
console.log("4"+telephoneCheck("1 (555) 555-5555"));
console.log("5"+telephoneCheck("5555555555"));
console.log("6"+telephoneCheck("123**&!!asdf#"));
console.log("7"+telephoneCheck("(6505552368)"));
console.log("8"+telephoneCheck("2 (757) 622-7382"));
console.log("9"+telephoneCheck("-1 (757) 622-7382"));