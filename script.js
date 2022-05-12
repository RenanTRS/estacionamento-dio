"use strict";
(() => {
    const getInputElement = (query) => document.querySelector(query); //Função para a captura de inputs
    const buttonCadastrar = document.querySelector('.add'); //Button cadastrar
    buttonCadastrar === null || buttonCadastrar === void 0 ? void 0 : buttonCadastrar.addEventListener('click', () => {
        var _a, _b, _c;
        const name = (_a = getInputElement('#name')) === null || _a === void 0 ? void 0 : _a.value;
        const color = (_b = getInputElement('#color')) === null || _b === void 0 ? void 0 : _b.value;
        const plate = (_c = getInputElement('#plate')) === null || _c === void 0 ? void 0 : _c.value;
        if (!name || !plate || !color) {
            return;
        }
        console.log(name);
        console.log(color);
        console.log(plate);
    });
})();
