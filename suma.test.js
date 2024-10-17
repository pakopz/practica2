const suma = require('./suma');

test('suma de 2 y 3 es 5', () => {
    expect(suma(2, 3)).toBe(5);
});

test('suma de -1 y 1 es 0', () => {
    expect(suma(-1, 1)).toBe(0);
});

test('suma de 0 y 0 es 0', () => {
    expect(suma(0, 0)).toBe(0);
});

test('suma de 1.5 y 2.5 es 4', () => {
    expect(suma(1.5, 2.5)).toBe(4);
});

test('suma de números negativos', () => {
    expect(suma(-2, -3)).toBe(-5);
});

test('suma lanza un error si se ingresan letras', () => {
    expect(() => suma('a', 2)).toThrow('Ingresar solo numeros');
});

test('suma lanza un error si se ingresan símbolos', () => {
    expect(() => suma('%', 2)).toThrow('Ingresar solo numeros');
});