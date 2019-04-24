global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data-mock');

describe('Realizando test a las funciones', () => {
  it('debería ser una función', () => {
    expect(typeof GlobalFunctions.converData).toBe('function');
  });
  
  it('La funcion converData deberia retornar el array modificado ', () => {
    expect(GlobalFunctions.converData(GlobalFunctions.originData)).toEqual(GlobalFunctions.dataModificada);
  });

  it('debería ser una función', () => {
    expect(typeof GlobalFunctions.filtrado).toBe('function');
  });
  it('La funcion filtrado deberia retornar el array Filtrado por genero masculino ', () => {
    expect(GlobalFunctions.filtrado(GlobalFunctions.dataModificada, 'gender', 'male')).toEqual(GlobalFunctions.filterGeneroM);
  });
  it('La funcion filtrado deberia retornar el array Filtrado por genero femenino ', () => {
    expect(GlobalFunctions.filtrado(GlobalFunctions.dataModificada, 'gender', 'female')).toEqual(GlobalFunctions.filterGeneroF);
  });

  it('debería ser una función', () => {
    expect(typeof GlobalFunctions.organized).toBe('function');
  });
  
  it('La funcion organized deberia retornar en manera ascendente', () => {
    expect(GlobalFunctions.organized(GlobalFunctions.dataModificada, 'Ascendente')).toEqual(GlobalFunctions.dataOrdenada);
  });
  it('la funcion deveria retornar en manera descendente', () => {
    expect(GlobalFunctions.organized(GlobalFunctions.dataModificada, 'Descendente')).toEqual(GlobalFunctions.dataOrdenadaDescendente);
  });
  it('la funcion deveria retornar igual', () => {
    expect(GlobalFunctions.organized(GlobalFunctions.sortIgual, 'igual')).toEqual(undefined);
  });
});