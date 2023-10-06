const ValidaCpf = (value) => {
    if (value.length !== 11) {
        return false;
    }

    const digits = value.split('').map(Number);
    const [a, b, c, d, e, f, g, h, i, j, k] = digits;

    if (
        a === b &&
        b === c &&
        c === d &&
        d === e &&
        e === f &&
        f === g &&
        g === h &&
        h === i &&
        i === j &&
        j === k
    ) {
        return false;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += digits[i] * (10 - i);
    }

    let remainder = sum % 11;
    if (remainder < 2) {
        remainder = 0;
    } else {
        remainder = 11 - remainder;
    }

    if (remainder !== digits[9]) {
        return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += digits[i] * (11 - i);
    }

    remainder = sum % 11;
    if (remainder < 2) {
        remainder = 0;
    } else {
        remainder = 11 - remainder;
    }

    if (remainder !== digits[10]) {
        return false;
    }

    return true;
};

export { ValidaCpf }