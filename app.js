let fs = require("fs")
let text2png = require('text2png');
fs.writeFileSync('./output/stats.png', text2png('Statistics', {
  font: '30px Outfit',
	color: "#2563eb",
	// 'backgroundColor': "red",
  localFontPath: 'fonts/outfit-med.ttf',
  localFontName: 'Outfit'
}));