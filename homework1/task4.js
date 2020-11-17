/*
Create object "utils". It should contain:
- function to generate random number;
- function to generate random alphanumeric string;
- simple logger: has to contain 2 arguments - level (default value is "INFO"), message;
*/

const utils = {
    randomNumber: function(max) {
        return Math.floor(Math.random() * Math.floor(max+1));
    },
    randomString: function(length) {
        let string = '';
        const letters = '0123456789qwertyuiopasdfghjklzxcvbnm';
        let lettersLength = letters.length;
        for ( let i = 0; i < length; i++ ) {
           string+= letters.charAt(Math.floor(Math.random() * lettersLength));
        }
        return string;
    },
    logger: function (level, message) {
        console.log(`[${level.toUpperCase()}]: ${message}`);
    }
    
}

console.log(`Rundom number = ${utils.randomNumber(20)}`);
console.log(`Rundom string = ${utils.randomString(20)}`);

utils.logger('info', 'message');