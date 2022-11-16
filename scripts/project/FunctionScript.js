const sdkElem = document.createElement('script');
sdkElem.type = 'text/javascript';
sdkElem.src = './Construct3CrazySDK.js';
document.body.appendChild(sdkElem);


/* Форматирование числа с разделителем
* @param integer n: длина десятичного числа
* @param integer x: длина всей части
* @parammixed s: разделитель разделов
* @param смешанный c: десятичный разделитель
*/


 
Number.prototype.formatMoney = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};
/**
12345678.9.format(2, 3, '.', ',');  // "12.345.678,90"
123456.789.format(4, 4, ' ', ':');  // "12 3456:7890"
12345678.9.format(0, 3, '-');       // "12-345-679
**/

Number.prototype.formatTimer = function () {

        var seconds = (this / 1000).toFixed(1);

        var minutes = (this / (1000 * 60)).toFixed(1);

        var hours = (this / (1000 * 60 * 60)).toFixed(1);

        var days = (this / (1000 * 60 * 60 * 24)).toFixed(1);

        return days + "D " + hours + "H " + minutes + "M " + seconds + "S "
    }