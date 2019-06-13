var keyData = {
    p: {
        sound: new Howl({
            urls: ['sounds/P.mp3'],
            loop: false,
            volume: 0.15
        })
    },

    o: {
        sound: new Howl({
            urls: ['sounds/O.mp3'],
            loop: false,
            volume: 0.15
        })
    },

    i: {
        sound: new Howl({
            urls: ['sounds/I.mp3'],
            loop: false,
            volume: 0.15
        })
    },

    u: {
        sound: new Howl({
            urls: ['sounds/U.mp3'],
            loop: false,
            volume: 0.15
        })
    },

    y: {
        sound: new Howl({
            urls: ['sounds/Y.mp3'],
            loop: false,
            volume: 0.15
        })
    },

    t: {
        sound: new Howl({
            urls: ['sounds/T.mp3'],
            loop: false,
            volume: 0.15
        })
    },

    r: {
        sound: new Howl({
            urls: ['sounds/R.mp3'],
            loop: false,
            volume: 0.15
        })
    },

    e: {
        sound: new Howl({
            urls: ['sounds/E.mp3'],
            loop: false,
            volume: 0.15
        })
    },

    w: {
        sound: new Howl({
            urls: ['sounds/W.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    q: {
        sound: new Howl({
            urls: ['sounds/Q.mp3'],
            loop: false,
            volume: 0.15
        })
    },

    'shift': {
        sound: new Howl({
            urls: ['sounds/shift.mp3'],
            loop: false,
            volume: 0.15
        })
    },

    'up': {
        sound: new Howl({
            urls: ['sounds/up.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    'm': {
        sound: new Howl({
            urls: ['sounds/M.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    'n': {
        sound: new Howl({
            urls: ['sounds/N.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    'b': {
        sound: new Howl({
            urls: ['sounds/B.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    'v': {
        sound: new Howl({
            urls: ['sounds/V.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    'c': {
        sound: new Howl({
            urls: ['sounds/C.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    'x': {
        sound: new Howl({
            urls: ['sounds/X.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    'z': {
        sound: new Howl({
            urls: ['sounds/Z.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    '0': {
        sound: new Howl({
            urls: ['sounds/0.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    '9': {
        sound: new Howl({
            urls: ['sounds/8.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    '7': {
        sound: new Howl({
            urls: ['sounds/7.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    '6': {
        sound: new Howl({
            urls: ['sounds/5.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    '5': {
        sound: new Howl({
            urls: ['sounds/4.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    '3': {
        sound: new Howl({
            urls: ['sounds/3.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    '2': {
        sound: new Howl({
            urls: ['sounds/1.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    '1': {
        sound: new Howl({
            urls: ['sounds/L.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    'k': {
        sound: new Howl({
            urls: ['sounds/J.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    'j': {
        sound: new Howl({
            urls: ['sounds/H.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    'g': {
        sound: new Howl({
            urls: ['sounds/G.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    'f': {
        sound: new Howl({
            urls: ['sounds/D.mp3'],
            loop: false,
            volume: 0.15
        })
    },
    's': {
        sound: new Howl({
            urls: ['sounds/S.mp3'],
            loop: false,
            volume: 0.15
        })
    }
    // 'space': {
    //     sound: new Howl({
    //         urls: ['sounds/S.mp3'],
    //         loop: false,
    //         volume: 0.15
    //     })
    // },
    // 'control': {
    //     sound: new Howl({
    //         urls: ['sounds/S.mp3'],
    //         loop: false,
    //         volume: 0.15
    //     })
    // },
    // 'alt': {
    //     sound: new Howl({
    //         urls: ['sounds/S.mp3'],
    //         loop: false,
    //         volume: 0.15
    //     })
    // },
    // 'tab': {
    //     sound: new Howl({
    //         urls: ['sounds/S.mp3'],
    //         loop: false,
    //         volume: 0.15
    //     })
    // },
    // 'enter': {
    //     sound: new Howl({
    //         urls: ['sounds/S.mp3'],
    //         loop: false,
    //         volume: 0.15
    //     })
    // },
}




// Key load and Functions

var Keys = function(pointLeft, pointRight) {

    var rectangle = new Rectangle(new Point(pointLeft, 0), new Point(pointRight, 200));
    var radius = new Size(2, 20);
    var path = new Path.Rectangle(rectangle, radius);
    path.fillColor = 'white';
    path.strokeColor = 'black';

    path.onMouseEnter = function(event) {
        this.fillColor = 'rgba(210, 210, 210, 0.86)'
    }

    path.onMouseLeave = function(event) {
        this.fillColor = 'white';
    }

};

var Bkeys = function(pointLeft, pointRight) {
    var rectangle = new Rectangle(new Point(pointLeft, 0), new Point(pointRight, 120));
    var path = new Path.Rectangle(rectangle);
    path.fillColor = 'black';
    path.strokeColor = 'black';

    path.onMouseEnter = function(event) {
        this.fillColor = 'rgba(10, 10, 10, 0.76)'
    }

    path.onMouseLeave = function(event) {
        this.fillColor = 'black';
    }
}

var sndKeys = function(pointLeft, pointRight) {
    var rectangle = new Rectangle(new Point(pointLeft, 0), new Point(pointRight, 200));
    var radius = new Size(2, 20);
    var path = new Path.Rectangle(rectangle, radius);
    path.fillColor = 'rgba(210, 210, 210, 0.86)';
    path.strokeColor = 'black';

}

var sndBkeys = function(pointLeft, pointRight) {
    var rectangle = new Rectangle(new Point(pointLeft, 0), new Point(pointRight, 120));
    var path = new Path.Rectangle(rectangle);
    path.fillColor = 'rgba(180, 180, 180, 0.46)';
    path.strokeColor = 'black';
}


// White Keys

Keys(0, 61);
Keys(61, 122);
Keys(122, 183);
Keys(183, 244);
Keys(244, 305);
Keys(305, 366);
Keys(366, 427);
Keys(427, 488);
Keys(488, 549);
Keys(549, 610);
Keys(610, 671);
Keys(671, 732);
Keys(732, 793);
Keys(793, 854);
Keys(854, 915);
Keys(915, 976);
Keys(976, 1037);
Keys(1037, 1098);
Keys(1098, 1159);
Keys(1159, 1220);
Keys(1220, 1281);
Keys(1281, 1342);
Keys(1342, 1403);
Keys(1403, 1464);
Keys(1464, 1525);





// Black Keys

Bkeys(46, 79)
Bkeys(107, 140)
    // Bkeys(168, 201)
Bkeys(229, 262)
Bkeys(290, 323)
Bkeys(351, 384)
    // Bkeys(412, 445)
Bkeys(473, 506)
Bkeys(534, 567)
    // Bkeys(595, 628)
Bkeys(656, 689)
Bkeys(717, 750)
Bkeys(778, 811)
    // Bkeys(839, 872)
Bkeys(900, 933)
Bkeys(961, 994)
    // Bkeys(1022, 1055)
Bkeys(1083, 1116)
Bkeys(1144, 1177)
Bkeys(1205, 1238)
    // Bkeys(1266, 1299)
Bkeys(1327, 1360)
Bkeys(1388, 1421)
    // Bkeys(1449, 1482)
Bkeys(1510, 1520)



// Keyboard Interaction

function onKeyDown(event) {

    keyData[event.key].sound.play();

    // White Keys

    if (event.key == 'p') {
        sndKeys(1403, 1464);
        Bkeys(1388, 1421);
    }

    if (event.key == 'o') {
        sndKeys(1342, 1403);
        Bkeys(1327, 1360);
        Bkeys(1388, 1421);
    }

    if (event.key == 'i') {
        sndKeys(1281, 1342);
        Bkeys(1327, 1360);
    }

    if (event.key == 'u') {
        sndKeys(1220, 1281);
        Bkeys(1205, 1238);
    }

    if (event.key == 'y') {
        sndKeys(1159, 1220);
        Bkeys(1205, 1238);
        Bkeys(1144, 1177);
    }

    if (event.key == 't') {
        sndKeys(1098, 1159);
        Bkeys(1144, 1177);
        Bkeys(1083, 1116);
    }

    if (event.key == 'r') {
        sndKeys(1037, 1098);
        Bkeys(1083, 1116);
    }

    if (event.key == 'e') {
        sndKeys(976, 1037);
        Bkeys(961, 994);
    }

    if (event.key == 'w') {
        sndKeys(915, 976);
        Bkeys(961, 994);
        Bkeys(900, 933);
    }

    if (event.key == 'q') {
        sndKeys(854, 915);
        Bkeys(900, 933);
    }

    if (event.key == 'up') {
        sndKeys(793, 854);
        Bkeys(778, 811);
    }

    if (event.key == 'shift') {
        sndKeys(732, 793);
        Bkeys(778, 811);
        Bkeys(717, 750);
    }

    if (event.key == 'm') {
        sndKeys(671, 732);
        Bkeys(717, 750);
        Bkeys(656, 689);
    }

    if (event.key == 'n') {
        sndKeys(610, 671);
        Bkeys(656, 689);
    }

    if (event.key == 'b') {
        sndKeys(549, 610);
        Bkeys(534, 567);
    }

    if (event.key == 'v') {
        sndKeys(488, 549);
        Bkeys(534, 567);
        Bkeys(473, 506);
    }

    if (event.key == 'c') {
        sndKeys(427, 488);
        Bkeys(473, 506);
    }

    if (event.key == 'x') {
        sndKeys(366, 427);
        Bkeys(351, 384);
    }

    if (event.key == 'z') {
        sndKeys(305, 366);
        Bkeys(351, 384);
        Bkeys(290, 323);
    }

    // Black Keys

    if (event.key == '0') {
        sndBkeys(1388, 1421);
    }
    if (event.key == '9') {
        sndBkeys(1327, 1360);
    }
    if (event.key == '7') {
        sndBkeys(1205, 1238);
    }
    if (event.key == '6') {
        sndBkeys(1144, 1177);
    }
    if (event.key == '5') {
        sndBkeys(1083, 1116);
    }
    if (event.key == '3') {
        sndBkeys(961, 994);
    }
    if (event.key == '2') {
        sndBkeys(900, 933);
    }
    if (event.key == '1') {
        sndBkeys(778, 811);
    }
    if (event.key == 'k') {
        sndBkeys(717, 750);
    }
    if (event.key == 'j') {
        sndBkeys(656, 689);
    }
    if (event.key == 'g') {
        sndBkeys(534, 567);
    }
    if (event.key == 'f') {
        sndBkeys(473, 506);
    }
    if (event.key == 's') {
        sndBkeys(351, 384);
    }
    if (event.key == '') {
        sndBkeys(290, 323);
    }
    if (event.key == '') {
        sndBkeys(229, 262);
    }

}


function onKeyUp(event) {

    // White Keys

    if (event.key == 'p') {
        Keys(1403, 1464);
        Bkeys(1388, 1421);
    }

    if (event.key == 'o') {
        Keys(1342, 1403);
        Bkeys(1327, 1360);
        Bkeys(1388, 1421);
    }

    if (event.key == 'i') {
        Keys(1281, 1342);
        Bkeys(1327, 1360);
    }

    if (event.key == 'u') {
        Keys(1220, 1281);
        Bkeys(1205, 1238);
    }

    if (event.key == 'y') {
        Keys(1159, 1220);
        Bkeys(1205, 1238);
        Bkeys(1144, 1177);
    }

    if (event.key == 't') {
        Keys(1098, 1159);
        Bkeys(1144, 1177);
        Bkeys(1083, 1116);
    }

    if (event.key == 'r') {
        Keys(1037, 1098);
        Bkeys(1083, 1116);
    }

    if (event.key == 'e') {
        Keys(976, 1037);
        Bkeys(961, 994);
    }

    if (event.key == 'w') {
        Keys(915, 976);
        Bkeys(961, 994);
        Bkeys(900, 933);
    }

    if (event.key == 'q') {
        Keys(854, 915);
        Bkeys(900, 933);
    }

    if (event.key == 'up') {
        Keys(793, 854);
        Bkeys(778, 811);
    }

    if (event.key == 'shift') {
        Keys(732, 793);
        Bkeys(778, 811);
        Bkeys(717, 750);
    }

    if (event.key == 'm') {
        Keys(671, 732);
        Bkeys(717, 750);
        Bkeys(656, 689);
    }

    if (event.key == 'n') {
        Keys(610, 671);
        Bkeys(656, 689);
    }

    if (event.key == 'b') {
        Keys(549, 610);
        Bkeys(534, 567);
    }

    if (event.key == 'v') {
        Keys(488, 549);
        Bkeys(534, 567);
        Bkeys(473, 506);
    }

    if (event.key == 'c') {
        Keys(427, 488);
        Bkeys(473, 506);
    }

    if (event.key == 'x') {
        Keys(366, 427);
        Bkeys(351, 384);
    }

    if (event.key == 'z') {
        Keys(305, 366);
        Bkeys(351, 384);
        Bkeys(290, 323);
    }

    // Black Keys

    if (event.key == '0') {
        Bkeys(1388, 1421);
    }

    if (event.key == '9') {
        Bkeys(1327, 1360);
    }

    if (event.key == '7') {
        Bkeys(1205, 1238);
    }

    if (event.key == '6') {
        Bkeys(1144, 1177);
    }

    if (event.key == '5') {
        Bkeys(1083, 1116);
    }

    if (event.key == '3') {
        Bkeys(961, 994);
    }

    if (event.key == '2') {
        Bkeys(900, 933);
    }

    if (event.key == '1') {
        Bkeys(778, 811);
    }

    if (event.key == 'k') {
        Bkeys(717, 750);
    }

    if (event.key == 'j') {
        Bkeys(656, 689);
    }

    if (event.key == 'g') {
        Bkeys(534, 567);
    }

    if (event.key == 'f') {
        Bkeys(473, 506);
    }

    if (event.key == 's') {
        Bkeys(351, 384);
    }

    if (event.key == '') {
        Bkeys(290, 323);
    }

    if (event.key == '') {
        Bkeys(229, 262);
    }

}