function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Ingresar solo numeros');
    }
    return a + b;
}

module.exports = suma;