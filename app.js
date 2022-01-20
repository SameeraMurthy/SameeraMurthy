// let TextToSVG = require("text-to-svg")
let fs = require("fs")
// const textToSVG = TextToSVG.loadSync('./fonts/outfit-med.ttf');
// const svg = textToSVG.getSVG('Sameer M.', {
// 	x: 0,
// 	y: 96,
// 	fontSize: 96,
// 	attributes: {
// 		// stroke: "black",
// 		// 'stroke-width': "3"
// 		fill: "#2563eb"
// 	}
// });

// try {
//   fs.writeFileSync('./name.svg', svg)
// } catch (err) {
//   console.error(err)
// }

var text2png = require('text2png');
fs.writeFileSync('./output/name.png', text2png('Sameer H.', {
  font: '50px Outfit',
	color: "#2563eb",
	// 'backgroundColor': "red",
  localFontPath: 'fonts/outfit-med.ttf',
  localFontName: 'Outfit'
}));

fs.writeFileSync('./output/stats.png', text2png('Statistics', {
  font: '30px Outfit',
	color: "#2563eb",
	// 'backgroundColor': "red",
  localFontPath: 'fonts/outfit-med.ttf',
  localFontName: 'Outfit'
}));
