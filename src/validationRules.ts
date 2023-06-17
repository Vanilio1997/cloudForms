export function  validionOnExtraSymbols(latter:string): boolean {
    return /^[а-яА-ЯёЁa-zA-Z0-9]+$/.test(latter);
};

// export function validationNumbers(symbol:)