var fs = require('fs');
function generateLogo(logo) {
    fs.writeFile('logo.svg', logo, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}
module.exports = generateLogo;
