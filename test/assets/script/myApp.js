cc.Class({
    extends: cc.Component,

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
        hero:{ //挂载hero
          default:null,
          type:cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {
        let self=this;
        self.node.on('mousemove',function(event){
            var visibleSize=cc.director.getVisibleSize();//屏幕大小
            //getVisibleSize:获取前面的大小 此为scene  也可能是View
            //getLocationX,Y 获取事件位置
        //会在图片中详细解释
            var Xindex=Math.floor(event.getLocationX()*3/visibleSize.width);
            var Yindex=2-Math.floor(event.getLocationY()*3/visibleSize.height);
            var dir=Xindex+Yindex;
            if(Xindex==1 && Yindex==1) return ;
            if(Xindex<Yindex) dir=8-dir;
            self.hero.getComponent('myHero').changeDirection(dir);//传递
        });

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
