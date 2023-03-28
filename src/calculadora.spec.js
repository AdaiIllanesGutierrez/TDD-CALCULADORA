import calculadora from "./calculadora.js";

describe("Calculadora", () => {
  it("calcular una cadena vacia", () => {
    expect(calculadora("")).toEqual(0);
  });
  it("convertir un string a un entero", () => {
    expect(calculadora("1")).toEqual(1);
  });
  it("separar segun la coma y sumar los numeros ", () => {
    expect(calculadora("1,2")).toEqual(3);
  });
  it("sumar 2 o mas valores separados por una coma", () => {
    expect(calculadora("1,2,3,4,5")).toEqual(15);
  });
  it("sumar 2 valores separados por guion", () => {
    expect(calculadora("1-2")).toEqual(3);
  });
  it("sumar mas de 2 valores por guion", () => {
    expect(calculadora("1-2-3-4-5")).toEqual(15);
  });
  it(" sumar mas de 2 valores separado por guion o coma", () => {
    expect(calculadora("1,2,3-4-5")).toEqual(15);
  });
  it(" sumar mas de 2 valores separados por guion o coma o un delimitardor especial ", () => {
    expect(calculadora("//[;] 6,3-2;1")).toEqual(12);
  });

});