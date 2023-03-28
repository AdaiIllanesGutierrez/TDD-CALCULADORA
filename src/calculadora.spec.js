import calculadora from "./calculadora.js";

describe("Calculadora", () => {
  it("calcular una cadena vacia", () => {
    expect(calculadora("")).toEqual(0);
  });
  xit("convertir un string a un entero", () => {
    expect(calculadora("1")).toEqual(1);
  });
  xit("separar", () => {
    expect(calculadora("1,2")).toEqual(3);
  });
  xit("calcular una cadena vacia", () => {
    expect(calculadora("")).toEqual(0);
  });
});