function Random(max) {
    return Math.floor(Math.random() * max);
}

function RandomPass(minChar) {
    
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const symbols = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '=', '+', '/', '\''];

    let password = '';
    for (let i = 0; i < minChar; i++) {
        var whichChar = Random(3);
        var randomChar;
        switch (whichChar) {
            case 0: //ALPHABET
            randomChar = Random(alphabets.length);
                var upperLOWER = Random(2);
                if (upperLOWER == 0) {
                    var randomAlpha = alphabets[randomChar].toLowerCase();
                } else {
                    var randomAlpha = alphabets[randomChar].toUpperCase();
                }
                password += randomAlpha;
                break;
                case 1: //NUMBER
                password += Random(10);
                break;
            case 2: //SYMBOL
                randomChar = Random(symbols.length);
                password += symbols[randomChar];
                break;
            }
    }
    return { password };
}