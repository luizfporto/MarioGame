/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/enemy.png":
/*!***************************!*\
  !*** ./src/img/enemy.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "da50cc9438e72200f8b306d4ac37b8f0.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/spaceship.png":
/*!*******************************!*\
  !*** ./src/img/spaceship.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "32f420b8fe627e4c74036274b7e75592.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_enemy_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/enemy.png */ "./src/img/enemy.png");
/* harmony import */ var _img_spaceship_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/spaceship.png */ "./src/img/spaceship.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = 1.5;
var score = 0;
var lives = 3;
var gameState = 'playing';
var creditsY = canvas.height; // Variável para fazer os créditos subirem

var backgroundMusic = new Audio('./audio/Orbital Colossus.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.4;
var musicStarted = false;

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformSmallTallImage = createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var background = createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var hills = createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var spriteStandRightImg = createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
var spriteStandLeftImg = createImage(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]);
var spriteRunRightImg = createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
var spriteRunLeftImg = createImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
var enemyImage = createImage(_img_enemy_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
var spaceshipImage = createImage(_img_spaceship_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  var osc = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();
  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  if (type === 'jump') {
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.15);
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
  } else if (type === 'stomp') {
    osc.frequency.setValueAtTime(300, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.2);
    gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.2);
  } else if (type === 'gameover') {
    osc.frequency.setValueAtTime(200, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.5);
    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.5);
  }
}

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 66;
    this.height = 150;
    this.image = spriteStandRightImg;
    this.frames = 0;
    this.sprites = {
      stand: {
        right: spriteStandRightImg,
        left: spriteStandLeftImg,
        cropWidth: 177,
        width: 66
      },
      run: {
        right: spriteRunRightImg,
        left: spriteRunLeftImg,
        cropWidth: 341,
        width: 127.875
      }
    };
    this.currentStyle = this.sprites.stand;
    this.currentCropWidth = 177;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.frames * this.currentCropWidth, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;

      if (this.frames > 59 && (this.image === this.sprites.stand.right || this.image === this.sprites.stand.left)) {
        this.frames = 0;
      } else if (this.frames > 29 && (this.image === this.sprites.run.right || this.image === this.sprites.run.left)) {
        this.frames = 0;
      }

      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

var Enemy = /*#__PURE__*/function () {
  function Enemy(_ref3) {
    var position = _ref3.position,
        velocity = _ref3.velocity,
        minX = _ref3.minX,
        maxX = _ref3.maxX;

    _classCallCheck(this, Enemy);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.image = enemyImage;
    this.width = 90;
    this.height = 90;
    this.minX = minX;
    this.maxX = maxX;
  }

  _createClass(Enemy, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;

      if (this.position.x <= this.minX) {
        this.position.x = this.minX;
        this.velocity.x = -this.velocity.x;
      } else if (this.position.x + this.width >= this.maxX) {
        this.position.x = this.maxX - this.width;
        this.velocity.x = -this.velocity.x;
      }
    }
  }]);

  return Enemy;
}();

var Spaceship = /*#__PURE__*/function () {
  function Spaceship(_ref4) {
    var position = _ref4.position;

    _classCallCheck(this, Spaceship);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.image = spaceshipImage;
    this.width = 250;
    this.height = 250;
  }

  _createClass(Spaceship, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Spaceship;
}();

var player = new Player();
var platforms = [];
var genericObjects = [];
var enemies = [];
var spaceship = {};
var lastKey = '';
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  up: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  player = new Player();
  var groundY = 470;
  var p1X = -1;
  var p2X = platformImage.width - 3;
  var p3X = platformImage.width * 2 + 150;
  var p4X = platformImage.width * 3 + 300;
  var p5X = platformImage.width * 4 + 450;
  platforms = [new Platform({
    x: p1X,
    y: groundY,
    image: platformImage
  }), new Platform({
    x: p2X,
    y: groundY,
    image: platformImage
  }), new Platform({
    x: p3X,
    y: groundY,
    image: platformImage
  }), new Platform({
    x: p4X,
    y: groundY,
    image: platformImage
  }), new Platform({
    x: p5X,
    y: groundY,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: background
  }), new GenericObject({
    x: -1,
    y: -1,
    image: hills
  })];
  var enemySize = 90;
  enemies = [new Enemy({
    position: {
      x: p1X + 200,
      y: groundY - enemySize
    },
    velocity: {
      x: 2,
      y: 0
    },
    minX: p1X,
    maxX: p1X + platformImage.width
  }), new Enemy({
    position: {
      x: p2X + 200,
      y: groundY - enemySize
    },
    velocity: {
      x: 2,
      y: 0
    },
    minX: p2X,
    maxX: p2X + platformImage.width
  }), new Enemy({
    position: {
      x: p3X + 200,
      y: groundY - enemySize
    },
    velocity: {
      x: 2,
      y: 0
    },
    minX: p3X,
    maxX: p3X + platformImage.width
  }), new Enemy({
    position: {
      x: p4X + 200,
      y: groundY - enemySize
    },
    velocity: {
      x: 2,
      y: 0
    },
    minX: p4X,
    maxX: p4X + platformImage.width
  })];
  spaceship = new Spaceship({
    position: {
      x: p5X + 200,
      y: groundY - 250
    }
  });
  scrollOffset = 0;
  creditsY = canvas.height; // Reinicia a posição dos créditos ao recomeçar
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (g) {
    return g.draw();
  });
  platforms.forEach(function (p) {
    return p.draw();
  });
  enemies.forEach(function (e) {
    return e.update();
  });
  if (spaceship) spaceship.draw();
  player.update(); // Interface (Pontuação amarela no canto esquerdo e Corações no canto direito)

  c.fillStyle = 'yellow';
  c.font = '28px sans-serif';
  c.fillText("".concat(score), 30, 45);
  c.fillText("".concat('❤️'.repeat(lives)), canvas.width - 150, 45);

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (p) {
        return p.position.x -= player.speed;
      });
      genericObjects.forEach(function (g) {
        return g.position.x -= player.speed * 0.66;
      });
      enemies.forEach(function (e) {
        e.position.x -= player.speed;
        e.minX -= player.speed;
        e.maxX -= player.speed;
      });
      if (spaceship) spaceship.position.x -= player.speed;
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (p) {
        return p.position.x += player.speed;
      });
      genericObjects.forEach(function (g) {
        return g.position.x += player.speed * 0.66;
      });
      enemies.forEach(function (e) {
        e.position.x += player.speed;
        e.minX += player.speed;
        e.maxX += player.speed;
      });
      if (spaceship) spaceship.position.x += player.speed;
    }
  }

  platforms.forEach(function (p) {
    if (player.position.y + player.height <= p.position.y && player.position.y + player.height + player.velocity.y >= p.position.y && player.position.x + player.width >= p.position.x && player.position.x <= p.position.x + p.width) {
      player.velocity.y = 0;
    }
  });

  if (gameState === 'playing') {
    if (keys.right.pressed && lastKey === 'right' && player.image !== player.sprites.run.right) {
      player.frames = 1;
      player.image = player.sprites.run.right;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
    } else if (keys.left.pressed && lastKey === 'left' && player.image !== player.sprites.run.left) {
      player.frames = 1;
      player.image = player.sprites.run.left;
      player.currentCropWidth = player.sprites.run.cropWidth;
      player.width = player.sprites.run.width;
    } else if (!keys.right.pressed && lastKey === 'right' && player.image !== player.sprites.stand.right) {
      player.frames = 1;
      player.image = player.sprites.stand.right;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
    } else if (!keys.left.pressed && lastKey === 'left' && player.image !== player.sprites.stand.left) {
      player.frames = 1;
      player.image = player.sprites.stand.left;
      player.currentCropWidth = player.sprites.stand.cropWidth;
      player.width = player.sprites.stand.width;
    }

    enemies.forEach(function (enemy, index) {
      if (player.position.y + player.height <= enemy.position.y + 20 && player.position.y + player.height + player.velocity.y >= enemy.position.y && player.position.x + player.width >= enemy.position.x && player.position.x <= enemy.position.x + enemy.width) {
        playSound('stomp');
        player.velocity.y = -20;
        enemies.splice(index, 1);
        score += 100;
      } else if (player.position.x + player.width >= enemy.position.x && player.position.x <= enemy.position.x + enemy.width && player.position.y + player.height >= enemy.position.y && player.position.y <= enemy.position.y + enemy.height) {
        lives--;
        playSound('gameover');

        if (lives <= 0) {
          gameState = 'gameover';
        } else {
          init();
        }
      }
    });

    if (spaceship && player.position.x >= spaceship.position.x && player.position.y <= spaceship.position.y + spaceship.height && player.position.x + player.width <= spaceship.position.x + spaceship.width + 50 && player.position.y + player.height >= spaceship.position.y) {
      gameState = 'win';
    }

    if (player.position.y > canvas.height) {
      lives--;
      playSound('gameover');

      if (lives <= 0) {
        gameState = 'gameover';
      } else {
        init();
      }
    }
  } else if (gameState === 'gameover') {
    c.fillStyle = 'rgba(0, 0, 0, 0.8)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = 'white';
    c.font = '50px sans-serif';
    c.fillText('GAME OVER', canvas.width / 2 - 150, canvas.height / 2);
    c.font = '20px sans-serif';
    c.fillText('Pressione R para reiniciar', canvas.width / 2 - 110, canvas.height / 2 + 50);
  } else if (gameState === 'win') {
    // Tela preta de vitória
    c.fillStyle = 'rgba(0, 0, 0, 0.95)';
    c.fillRect(0, 0, canvas.width, canvas.height); // Título fixo no topo

    c.fillStyle = 'yellow';
    c.font = 'bold 45px sans-serif';
    c.textAlign = 'center';
    c.fillText('VOCÊ VENCEU!', canvas.width / 2, 90); // Texto subindo (Créditos)

    c.save();
    c.beginPath();
    c.rect(0, 130, canvas.width, 340);
    c.clip();
    c.fillStyle = 'white';
    c.font = '24px sans-serif';
    var startY = creditsY;
    var lineHeight = 45;
    c.fillText('--- CRÉDITOS ---', canvas.width / 2, startY);
    c.fillText('Desenvolvido por:', canvas.width / 2, startY + lineHeight);
    c.fillStyle = 'yellow';
    c.fillText('Luiz Fernando Porto', canvas.width / 2, startY + lineHeight * 2);
    c.fillStyle = 'white';
    c.fillText('Trilha Sonora:', canvas.width / 2, startY + lineHeight * 4);
    c.fillStyle = 'yellow';
    c.fillText('Orbital Colossus', canvas.width / 2, startY + lineHeight * 5);
    c.fillStyle = 'white';
    c.fillText('Música por:', canvas.width / 2, startY + lineHeight * 7);
    c.fillStyle = 'yellow';
    c.fillText('Matthew Pablo', canvas.width / 2, startY + lineHeight * 8);
    c.fillStyle = 'white';
    c.fillText('Obrigado por jogar!', canvas.width / 2, startY + lineHeight * 10);
    c.restore();
    c.textAlign = 'left'; // Reseta o alinhamento
    // Faz os créditos subirem devagar

    if (creditsY > -350) {
      creditsY -= 0.8;
    } // Instrução para reiniciar


    c.fillStyle = 'white';
    c.font = '20px sans-serif';
    c.textAlign = 'center';
    c.fillText('Pressione R para jogar novamente', canvas.width / 2, 520);
    c.textAlign = 'left';
  }
}

init();
animate();
window.addEventListener('keydown', function (_ref5) {
  var keyCode = _ref5.keyCode;

  if (!musicStarted) {
    backgroundMusic.play()["catch"](function () {});
    musicStarted = true;
  }

  switch (keyCode) {
    case 37:
      keys.left.pressed = true;
      lastKey = 'left';
      break;

    case 39:
      keys.right.pressed = true;
      lastKey = 'right';
      break;

    case 38:
      if (player.velocity.y === 0) {
        player.velocity.y -= 22;
        playSound('jump');
      }

      break;

    case 82:
      if (gameState === 'gameover' || gameState === 'win') {
        lives = 3;
        score = 0;
        gameState = 'playing';
        init();
      }

      break;
  }
});
window.addEventListener('keyup', function (_ref6) {
  var keyCode = _ref6.keyCode;

  switch (keyCode) {
    case 37:
      keys.left.pressed = false;
      break;

    case 39:
      keys.right.pressed = false;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map