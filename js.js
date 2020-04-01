if (num < 49) {
    console.log("false");
} else if (num > 100) {
    console.log("false");
} else {
    console.log("true ----");
}

switch (num) {
    case num < 49:
        console.log("false");
        break;
    case num > 100:
        console.log("false");
        break;
    default:
        console.log("true");
        break;
}

var num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}

while (num < 55);

for (let i = 0; i < 8; i++) {
    console.log(i);
}