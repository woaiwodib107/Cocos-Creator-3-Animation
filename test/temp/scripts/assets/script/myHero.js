cc._RFpush(module, 'd6190HVskFH/pUgm0ssUn0k', 'myHero');
// script/myHero.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        AnimName: ''
    },

    // use this for initialization
    onLoad: function onLoad() {},
    changeDirection: function changeDirection(dir) {
        this.getComponent(cc.Animation).play(this.AnimName + dir);
    }
});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();