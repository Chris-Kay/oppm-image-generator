const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(3200, 1800)
const ctx = canvas.getContext('2d')
var saveLocal = require('fs').writeFileSync


exports.handler = async (event, context, callback) => {
    console.log('111')
    // Write "Awesome!"
    ctx.font = '150px Impact'
    ctx.fillStyle = "white";

    // Draw cat with lime helmet
    const background = await loadImage('examples/images/background.jpeg');
    ctx.drawImage(background, 0, 0, 3200, 1800) 

    if(event.body.imageLevel === 'club') {
        const homeTeam = await loadImage('examples/images/bwfc.png')
        const awayTeam = await loadImage('examples/images/away.png')
        const v = await loadImage('examples/images/v.png')

        ctx.drawImage(homeTeam, 400, 200, 1000, 1000) // 1600 half
        ctx.drawImage(awayTeam, 1800, 200, 1000, 1000)
        ctx.drawImage(v, 1500, 600, 200, 600)
    } else if (event.body.imageLevel === 'league') {
        const league = await loadImage('examples/images/mls.png')
        ctx.drawImage(league, 1100, 200, 1000, 1000) // 1600 half
    }



    ctx.textAlign = 'center';
    ctx.fillText(event.body.name, 1600, 1500)




    saveLocal(`./${event.body.name}.jpeg`, canvas.toBuffer())
}
