import platform from '../img/platform.png'
import hillsImg from '../img/hills.png'
import backgroundImg from '../img/background.png'
import platformSmallTall from '../img/platformSmallTall.png'

import spriteRunLeft from '../img/spriteRunLeft.png'
import spriteRunRight from '../img/spriteRunRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png'
import spriteStandRight from '../img/spriteStandRight.png'

import enemyImgSrc from '../img/enemy.png'
import spaceshipImgSrc from '../img/spaceship.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = 1.5

let score = 0
let lives = 3
let gameState = 'playing'
let creditsY = canvas.height

const backgroundMusic = new Audio('./audio/Orbital Colossus.mp3')
backgroundMusic.loop = true
backgroundMusic.volume = 0.4
let musicStarted = false

function createImage(imageSrc) {
    const image = new Image()
    image.src = imageSrc
    return image
}

const platformImage = createImage(platform)
const platformSmallTallImage = createImage(platformSmallTall)
const background = createImage(backgroundImg)
const hills = createImage(hillsImg)

const spriteStandRightImg = createImage(spriteStandRight)
const spriteStandLeftImg = createImage(spriteStandLeft)
const spriteRunRightImg = createImage(spriteRunRight)
const spriteRunLeftImg = createImage(spriteRunLeft)

const enemyImage = createImage(enemyImgSrc)
const spaceshipImage = createImage(spaceshipImgSrc)

const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

function playSound(type) {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume()
    }
    const osc = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()
    osc.connect(gainNode)
    gainNode.connect(audioCtx.destination)

    if (type === 'jump') {
        osc.frequency.setValueAtTime(150, audioCtx.currentTime)
        osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.15)
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15)
        osc.start()
        osc.stop(audioCtx.currentTime + 0.15)
    } else if (type === 'stomp') {
        osc.frequency.setValueAtTime(300, audioCtx.currentTime)
        osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.2)
        gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2)
        osc.start()
        osc.stop(audioCtx.currentTime + 0.2)
    } else if (type === 'gameover') {
        osc.frequency.setValueAtTime(200, audioCtx.currentTime)
        osc.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.5)
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5)
        osc.start()
        osc.stop(audioCtx.currentTime + 0.5)
    }
}

class Player {
    constructor() {
        this.speed = 10
        this.position = { x: 100, y: 100 }
        this.velocity = { x: 0, y: 0 }
        this.width = 66
        this.height = 150
        this.image = spriteStandRightImg
        this.frames = 0
        this.sprites = {
            stand: { right: spriteStandRightImg, left: spriteStandLeftImg, cropWidth: 177, width: 66 },
            run: { right: spriteRunRightImg, left: spriteRunLeftImg, cropWidth: 341, width: 127.875 }
        }
        this.currentStyle = this.sprites.stand
        this.currentCropWidth = 177
    }

    draw() {
        c.drawImage(
            this.image,
            this.frames * this.currentCropWidth,
            0,
            this.currentCropWidth,
            400,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

    update() {
        this.frames++
        if (this.frames > 59 && (this.image === this.sprites.stand.right || this.image === this.sprites.stand.left)) {
            this.frames = 0
        } else if (this.frames > 29 && (this.image === this.sprites.run.right || this.image === this.sprites.run.left)) {
            this.frames = 0
        }

        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity
        }
    }
}

class Platform {
    constructor({ x, y, image }) {
        this.position = { x, y }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class GenericObject {
    constructor({ x, y, image }) {
        this.position = { x, y }
        this.image = image
        this.width = image.width
        this.height = image.height
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

class Enemy {
    constructor({ position, velocity, minX, maxX }) {
        this.position = { x: position.x, y: position.y }
        this.velocity = { x: velocity.x, y: velocity.y }
        this.image = enemyImage
        this.width = 90
        this.height = 90
        this.minX = minX
        this.maxX = maxX
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        this.position.x += this.velocity.x

        if (this.position.x <= this.minX) {
            this.position.x = this.minX
            this.velocity.x = -this.velocity.x
        } else if (this.position.x + this.width >= this.maxX) {
            this.position.x = this.maxX - this.width
            this.velocity.x = -this.velocity.x
        }
    }
}

class Spaceship {
    constructor({ position }) {
        this.position = { x: position.x, y: position.y }
        this.image = spaceshipImage
        this.width = 250
        this.height = 250
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

let player = new Player()
let platforms = []
let genericObjects = []
let enemies = []
let spaceship = {}

let lastKey = ''
const keys = { right: { pressed: false }, left: { pressed: false }, up: { pressed: false } }
let scrollOffset = 0

// Coordenadas dos botões virtuais desenhados na tela (mais para cima para não sumirem)
const touchButtons = {
    left: { x: 40, y: 420, width: 90, height: 90, pressed: false },
    right: { x: 150, y: 420, width: 90, height: 90, pressed: false },
    jump: { x: 880, y: 420, width: 90, height: 90, pressed: false }
}

function init() {
    player = new Player()
    
    const groundY = 470
    
    const p1X = -1
    const p2X = platformImage.width - 3
    const p3X = platformImage.width * 2 + 150
    const p4X = platformImage.width * 3 + 300
    const p5X = platformImage.width * 4 + 450

    platforms = [
        new Platform({ x: p1X, y: groundY, image: platformImage }),
        new Platform({ x: p2X, y: groundY, image: platformImage }),
        new Platform({ x: p3X, y: groundY, image: platformImage }),
        new Platform({ x: p4X, y: groundY, image: platformImage }),
        new Platform({ x: p5X, y: groundY, image: platformImage })
    ]

    genericObjects = [
        new GenericObject({ x: -1, y: -1, image: background }),
        new GenericObject({ x: -1, y: -1, image: hills })
    ]

    const enemySize = 90

    enemies = [
        new Enemy({ position: { x: p1X + 200, y: groundY - enemySize }, velocity: { x: 2, y: 0 }, minX: p1X, maxX: p1X + platformImage.width }),
        new Enemy({ position: { x: p2X + 200, y: groundY - enemySize }, velocity: { x: 2, y: 0 }, minX: p2X, maxX: p2X + platformImage.width }),
        new Enemy({ position: { x: p3X + 200, y: groundY - enemySize }, velocity: { x: 2, y: 0 }, minX: p3X, maxX: p3X + platformImage.width }),
        new Enemy({ position: { x: p4X + 200, y: groundY - enemySize }, velocity: { x: 2, y: 0 }, minX: p4X, maxX: p4X + platformImage.width })
    ]

    spaceship = new Spaceship({ position: { x: p5X + 200, y: groundY - 250 } })
    scrollOffset = 0
    creditsY = canvas.height
}

function drawTouchControls() {
    // Desenha os botões na tela para o usuário tocar
    c.save()
    c.lineWidth = 3
    c.font = 'bold 30px sans-serif'
    c.textAlign = 'center'
    c.textBaseline = 'middle'

    for (let key in touchButtons) {
        let btn = touchButtons[key]
        c.fillStyle = btn.pressed ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.3)'
        c.strokeStyle = 'white'
        c.beginPath()
        c.arc(btn.x + btn.width / 2, btn.y + btn.height / 2, btn.width / 2, 0, Math.PI * 2)
        c.fill()
        c.stroke()

        c.fillStyle = 'white'
        let label = key === 'left' ? '◄' : key === 'right' ? '►' : '▲'
        if ((gameState === 'gameover' || gameState === 'win') && key === 'jump') {
            label = '🔄'
        }
        c.fillText(label, btn.x + btn.width / 2, btn.y + btn.height / 2)
    }
    c.restore()
}

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    genericObjects.forEach((g) => g.draw())
    platforms.forEach((p) => p.draw())
    enemies.forEach((e) => e.update())
    if (spaceship) spaceship.draw()
    player.update()

    // Desenha os botões virtuais por cima de tudo
    drawTouchControls()

    // Interface (Pontuação e Vidas)
    c.fillStyle = 'yellow'
    c.font = '28px sans-serif'
    c.textAlign = 'left'
    c.fillText(`${score}`, 30, 45)
    c.fillText(`${'❤️'.repeat(lives)}`, canvas.width - 150, 45)

    // Atualiza movimento com base no teclado ou nos botões virtuais
    let movingRight = keys.right.pressed || touchButtons.right.pressed
    let movingLeft = keys.left.pressed || touchButtons.left.pressed

    if (movingRight && player.position.x < 400) {
        player.velocity.x = player.speed
    } else if ((movingLeft && player.position.x > 100) || (movingLeft && scrollOffset === 0 && player.position.x > 0)) {
        player.velocity.x = -player.speed
    } else {
        player.velocity.x = 0
        if (movingRight) {
            scrollOffset += player.speed
            platforms.forEach((p) => p.position.x -= player.speed)
            genericObjects.forEach((g) => g.position.x -= player.speed * 0.66)
            enemies.forEach((e) => {
                e.position.x -= player.speed
                e.minX -= player.speed
                e.maxX -= player.speed
            })
            if (spaceship) spaceship.position.x -= player.speed
        } else if (movingLeft && scrollOffset > 0) {
            scrollOffset -= player.speed
            platforms.forEach((p) => p.position.x += player.speed)
            genericObjects.forEach((g) => g.position.x += player.speed * 0.66)
            enemies.forEach((e) => {
                e.position.x += player.speed
                e.minX += player.speed
                e.maxX += player.speed
            })
            if (spaceship) spaceship.position.x += player.speed
        }
    }

    platforms.forEach((p) => {
        if (
            player.position.y + player.height <= p.position.y &&
            player.position.y + player.height + player.velocity.y >= p.position.y &&
            player.position.x + player.width >= p.position.x &&
            player.position.x <= p.position.x + p.width
        ) {
            player.velocity.y = 0
        }
    })

    if (gameState === 'playing') {
        if (movingRight && lastKey === 'right' && player.image !== player.sprites.run.right) {
            player.frames = 1
            player.image = player.sprites.run.right
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
        } else if (movingLeft && lastKey === 'left' && player.image !== player.sprites.run.left) {
            player.frames = 1
            player.image = player.sprites.run.left
            player.currentCropWidth = player.sprites.run.cropWidth
            player.width = player.sprites.run.width
        } else if (!movingRight && lastKey === 'right' && player.image !== player.sprites.stand.right) {
            player.frames = 1
            player.image = player.sprites.stand.right
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
        } else if (!movingLeft && lastKey === 'left' && player.image !== player.sprites.stand.left) {
            player.frames = 1
            player.image = player.sprites.stand.left
            player.currentCropWidth = player.sprites.stand.cropWidth
            player.width = player.sprites.stand.width
        }

        enemies.forEach((enemy, index) => {
            if (
                player.position.y + player.height <= enemy.position.y + 20 &&
                player.position.y + player.height + player.velocity.y >= enemy.position.y &&
                player.position.x + player.width >= enemy.position.x &&
                player.position.x <= enemy.position.x + enemy.width
            ) {
                playSound('stomp')
                player.velocity.y = -20
                enemies.splice(index, 1)
                score += 100
            } else if (
                player.position.x + player.width >= enemy.position.x &&
                player.position.x <= enemy.position.x + enemy.width &&
                player.position.y + player.height >= enemy.position.y &&
                player.position.y <= enemy.position.y + enemy.height
            ) {
                lives--
                playSound('gameover')
                if (lives <= 0) {
                    gameState = 'gameover'
                } else {
                    init()
                }
            }
        })

        if (
            spaceship &&
            player.position.x >= spaceship.position.x &&
            player.position.y <= spaceship.position.y + spaceship.height &&
            player.position.x + player.width <= spaceship.position.x + spaceship.width + 50 &&
            player.position.y + player.height >= spaceship.position.y
        ) {
            gameState = 'win'
        }

        if (player.position.y > canvas.height) {
            lives--
            playSound('gameover')
            if (lives <= 0) {
                gameState = 'gameover'
            } else {
                init()
            }
        }
    } else if (gameState === 'gameover') {
        c.fillStyle = 'rgba(0, 0, 0, 0.8)'
        c.fillRect(0, 0, canvas.width, canvas.height)
        c.fillStyle = 'white'
        c.font = '50px sans-serif'
        c.textAlign = 'center'
        c.fillText('GAME OVER', canvas.width / 2, canvas.height / 2)
        c.font = '20px sans-serif'
        c.fillText('Pressione R ou toque no botão de pulo para reiniciar', canvas.width / 2, canvas.height / 2 + 50)
    } else if (gameState === 'win') {
        c.fillStyle = 'rgba(0, 0, 0, 0.95)'
        c.fillRect(0, 0, canvas.width, canvas.height)

        c.fillStyle = 'yellow'
        c.font = 'bold 45px sans-serif'
        c.textAlign = 'center'
        c.fillText('VOCÊ VENCEU!', canvas.width / 2, 90)

        c.save()
        c.beginPath()
        c.rect(0, 130, canvas.width, 340)
        c.clip()

        c.fillStyle = 'white'
        c.font = '24px sans-serif'

        let startY = creditsY
        const lineHeight = 45

        c.fillText('--- CRÉDITOS ---', canvas.width / 2, startY)
        c.fillText('Desenvolvido por:', canvas.width / 2, startY + lineHeight)
        c.fillStyle = 'yellow'
        c.fillText('Luiz Fernando Porto', canvas.width / 2, startY + lineHeight * 2)
        
        c.fillStyle = 'white'
        c.fillText('Trilha Sonora:', canvas.width / 2, startY + lineHeight * 4)
        c.fillStyle = 'yellow'
        c.fillText('Orbital Colossus', canvas.width / 2, startY + lineHeight * 5)
        
        c.fillStyle = 'white'
        c.fillText('Música por:', canvas.width / 2, startY + lineHeight * 7)
        c.fillStyle = 'yellow'
        c.fillText('Matthew Pablo', canvas.width / 2, startY + lineHeight * 8)

        c.fillStyle = 'white'
        c.fillText('Obrigado por jogar!', canvas.width / 2, startY + lineHeight * 10)

        c.restore()

        if (creditsY > -350) {
            creditsY -= 0.8
        }

        c.fillStyle = 'white'
        c.font = '20px sans-serif'
        c.textAlign = 'center'
        c.fillText('Toque no botão 🔄 para jogar novamente', canvas.width / 2, 520)
    }
}

init()
animate()

// Eventos de teclado
window.addEventListener('keydown', ({ keyCode }) => {
    if (!musicStarted) {
        backgroundMusic.play().catch(() => {})
        musicStarted = true
    }

    switch (keyCode) {
        case 37: keys.left.pressed = true; lastKey = 'left'; break;
        case 39: keys.right.pressed = true; lastKey = 'right'; break;
        case 38:
            if (player.velocity.y === 0) {
                player.velocity.y -= 22
                playSound('jump')
            }
            break;
        case 82:
            if (gameState === 'gameover' || gameState === 'win') {
                lives = 3
                score = 0
                gameState = 'playing'
                init()
            }
            break;
    }
})

window.addEventListener('keyup', ({ keyCode }) => {
    switch (keyCode) {
        case 37: keys.left.pressed = false; break;
        case 39: keys.right.pressed = false; break;
    }
})

// --- CONTROLES POR TOQUE DIRETO NO CANVAS ---
function getCanvasCoordinates(e) {
    const rect = canvas.getBoundingClientRect()
    const touch = e.touches[0]
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    return {
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY
    }
}

canvas.addEventListener('touchstart', (e) => {
    e.preventDefault()
    if (!musicStarted) {
        backgroundMusic.play().catch(() => {})
        musicStarted = true
    }

    const pos = getCanvasCoordinates(e)

    for (let key in touchButtons) {
        let btn = touchButtons[key]
        if (pos.x >= btn.x && pos.x <= btn.x + btn.width && pos.y >= btn.y && pos.y <= btn.y + btn.height) {
            btn.pressed = true
            if (key === 'left') lastKey = 'left'
            if (key === 'right') lastKey = 'right'
            if (key === 'jump') {
                if (gameState === 'gameover' || gameState === 'win') {
                    lives = 3
                    score = 0
                    gameState = 'playing'
                    init()
                } else if (player.velocity.y === 0) {
                    player.velocity.y -= 22
                    playSound('jump')
                }
            }
        }
    }
}, { passive: false })

canvas.addEventListener('touchend', (e) => {
    e.preventDefault()
    // Reseta todos e checa quais toques ainda estão na tela
    for (let key in touchButtons) {
        touchButtons[key].pressed = false
    }

    for (let i = 0; i < e.touches.length; i++) {
        const rect = canvas.getBoundingClientRect()
        const touch = e.touches[i]
        const scaleX = canvas.width / rect.width
        const scaleY = canvas.height / rect.height
        const pos = {
            x: (touch.clientX - rect.left) * scaleX,
            y: (touch.clientY - rect.top) * scaleY
        }

        for (let key in touchButtons) {
            let btn = touchButtons[key]
            if (pos.x >= btn.x && pos.x <= btn.x + btn.width && pos.y >= btn.y && pos.y <= btn.y + btn.height) {
                btn.pressed = true
            }
        }
    }
}, { passive: false })