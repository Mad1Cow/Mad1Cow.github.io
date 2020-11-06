let elfMNameArray = [
    'Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 'Beiro', 'Berrian', 'Carric', 'Enialis',
    'Erdan', 'Erevan', 'Galinndan', 'Hadarai', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Laucian',
    'Mindartis', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Thamior',
    'Tharivol', 'Theren', 'Varis'
];
let elfFNameArray = [
    'Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Bethrynna', 'Birel', 'Caelynn',
    'Drusilia', 'Enna', 'Felosial', 'Ielenia', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia',
    'Meriele', 'Mialee', 'Naivara', 'Quelenna', 'Quillathe', 'Sariel', 'Shanairra', 'Shava', 'Silaqui',
    'Theirastra', 'Thia', 'Vadania', 'Valanthe', 'Xanaphia'
];

let randomNameM = parseInt(Math.random() * elfMNameArray.length);
let randomNameF = parseInt(Math.random() * elfFNameArray.length);

console.log('Male Elf: ' + elfMNameArray[randomNameM]);
console.log('Female Elf: ' + elfFNameArray[randomNameF]);
