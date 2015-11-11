(function() {
/*    CanvasRenderingContext2D.prototype.sector = function(x, y, radius, sDeg, eDeg) {
        // 初始保存
        this.save();
        // 位移到目标点
        this.translate(x, y);
        this.beginPath();
        // 画出圆弧
        this.arc(0, 0, radius, sDeg, eDeg);
        // 再次保存以备旋转
        this.save();
        // 旋转至起始角度
        this.rotate(eDeg);
        // 移动到终点，准备连接终点与圆心
        this.moveTo(radius, 0);
        // 连接到圆心
        this.lineTo(0, 0);
        // 还原
        this.restore();
        // 旋转至起点角度
        this.rotate(sDeg);
        // 从圆心连接到起点
        this.lineTo(radius, 0);
        this.closePath();
        // 还原到最初保存的状态
        this.restore();
        return this;
    }
    var ctx = document.getElementById('canvas').getContext('2d');
    var deg = Math.PI / 180;
    ctx.sector(100, 100, 80, 30 * deg, 111 * deg).fill();
    ctx.fillStyle = "#f00";
    ctx.sector(100, 100, 80, 111 * deg, 190 * deg).fill();
    ctx.fillStyle = "#0f0";
    ctx.sector(100, 100, 80, 190 * deg, 233 * deg).fill();
    ctx.fillStyle = "#00f";
    ctx.sector(100, 100, 80, 233 * deg, 280 * deg).fill();
    ctx.fillStyle = "#789";
    ctx.sector(100, 100, 80, 280 * deg, 345 * deg).fill();
    ctx.fillStyle = "#abcdef";
    ctx.sector(100, 100, 80, 345 * deg, 30 * deg).fill();*/
/*    CanvasRenderingContext2D.prototype.sector = function(x, y, radius, sAngle, eAngle) {
    this.beginPath();
    this.save();
    this.translate(x, y);
    this.moveTo(0, 0);
    this.arc(0, 0, radius, sAngle, eAngle);
    this.closePath();
    this.restore();
    return this;
};
var ctx = document.getElementById('canvas').getContext('2d');
    var deg = Math.PI / 180;
    ctx.fillStyle = "#EEEEFF";
    ctx.fillRect(0,0,400,400);
    ctx.fillStyle = "#00f";
    ctx.sector(200, 100, 100, 30 * deg, 111 * deg).fill();
    ctx.fillStyle = "#f00";
    ctx.sector(200, 100, 100, 113 * deg, 190 * deg).fill();
    ctx.fillStyle = "#0f0";
    ctx.sector(200, 100, 100, 192 * deg, 233 * deg).fill();
    ctx.fillStyle = "#00f";
    ctx.sector(200, 100, 100, 235 * deg, 280 * deg).fill();
    ctx.fillStyle = "#789";
    ctx.sector(200, 100, 100, 282 * deg, 345 * deg).fill();
    ctx.fillStyle = "#abcdef";
    ctx.sector(200, 100, 100, 347 * deg, 28 * deg).fill();*/
    draw5('canvas');
    // draw22('canvas');
    function draw5(id) {
            var canvas = document.getElementById(id);
            if (canvas == null)
                return false;


            var context = canvas.getContext("2d");
            context.save(); //保存了当前context的状态
            context.strokeStyle = "red";
            context.fillStyle = "#EEEEFF";
            context.fillRect(0, 0, 400, 300);

            context.fillStyle = "black";
            //平移 缩放 旋转  1 2 3        
            context.translate(100, 100);
            // context.scale(0.5, 0.5);
            context.rotate(Math.PI / 2);
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(200, 100);
            context.arc(0, 0, 100, 0, Math.PI / 4);
            // context.moveTo(0, 0);
            context.closePath();
            // context.fill();
            context.stroke();
            // context.fillRect(0, 0, 100, 100);


           /* context.restore(); //恢复到刚刚保存的状态,保存恢复只能使用一次
            context.save(); //保存了当前context的状态
            context.fillStyle = "rgba(255,0,0,0.2)";
            //平移 旋转 缩放 1 3 2
            context.translate(100, 100);
            context.rotate(Math.PI / 4);
            context.scale(0.5, 0.5);
            context.fillRect(0, 0, 100, 100);

            context.restore(); //恢复到刚刚保存的状态
            context.save(); //保存了当前context的状态
            context.fillStyle = "rgba(255,0,0,0.3)";
            //缩放 平移 旋转 2 1 3 
            context.scale(0.5, 0.5);
            context.translate(100, 100);
            context.rotate(Math.PI / 4);
            context.fillRect(0, 0, 100, 100);

            context.restore(); //恢复到刚刚保存的状态
            context.save(); //保存了当前context的状态
            context.fillStyle = "rgba(255,0,0,0.4)";
            //缩放 旋转 平移  2 3  1 
            context.scale(0.5, 0.5);
            context.rotate(Math.PI / 4);
            context.translate(100, 100);
            context.fillRect(0, 0, 100, 100);

            context.restore(); //恢复到刚刚保存的状态
            context.save(); //保存了当前context的状态
            context.fillStyle = "rgba(255,0,0,0.5)";
            //旋转 平移 缩放  3 1 2 
            context.rotate(Math.PI / 4);
            context.translate(100, 100);
            context.scale(0.5, 0.5);
            context.fillRect(0, 0, 100, 100);

            context.restore(); //恢复到刚刚保存的状态
            context.save(); //保存了当前context的状态
            context.fillStyle = "rgba(255,0,0,1)";
            //旋转 缩放 平移   3 2 1 
            context.rotate(Math.PI / 4);
            context.scale(0.5, 0.5);
            context.translate(100, 100);
            context.fillRect(0, 0, 100, 100);
*/
            //实验表明应该移动的是坐标轴
            //实验表明缩放的是坐标轴比例
            //实验表明旋转的是坐标轴
            //综合上述，因此平移 缩放 旋转 三者的顺序不同都将画出不同的结果
        }
    function draw23(id) {
        var canvas = document.getElementById(id);
        if (canvas == null) {
            return false;
        }
        var context = canvas.getContext('2d');
        var n = 0;

        //左侧1/4圆弧
        context.beginPath();
        // context.translate(-10, -10);
        // context.rotate(Math.PI / 4);
        // context.translate(-10, -10);
        context.moveTo(100, 100);
        context.arc(100, 100, 50, Math.PI / 4, Math.PI );
        // context.fillStyle = 'rgba(255,0,0,0.25)';
        // context.fill();
        context.save();
        context.strokeStyle = 'rgba(255,0,0,0.25)';
/*        context.rotate(20);
        context.moveTo(0, 0);
        // 连接到圆心
        context.lineTo(50, 0);*/
        context.closePath();
        context.stroke();
                context.fillStyle = 'rgba(255,0,0,0.25)';
        context.fill();

        /*           //右侧1/4圆弧
                   context.beginPath();
                   context.arc(300, 150, 50, 0, Math.PI/2 , false);
                   context.fillStyle = 'rgba(255,0,0,0.25)';
                   context.fill();
                   context.strokeStyle = 'rgba(255,0,0,0.25)';
                   context.closePath();
                   context.stroke();*/
    }

    function draw21(id) {
        var canvas = document.getElementById(id)
        if (canvas == null)
            return false;
        var context = canvas.getContext("2d");
        //实践表明在不设施fillStyle下的默认fillStyle=black
        context.fillRect(0, 0, 100, 100);
        //实践表明在不设施strokeStyle下的默认strokeStyle=black
        context.strokeRect(120, 0, 100, 100);

        //设置纯色
        context.fillStyle = "red";
        context.strokeStyle = "blue";
        context.fillRect(0, 120, 100, 100);
        context.strokeRect(120, 120, 100, 100);

        //设置透明度实践证明透明度值>0,<1值越低，越透明，值>=1时为纯色，值<=0时为完全透明
        context.fillStyle = "rgba(255,0,0,0.2)";
        context.strokeStyle = "rgba(255,0,0,0.2)";
        context.fillRect(240, 0, 100, 100);
        context.strokeRect(240, 120, 100, 100);
    }

    function draw22(id) {
        var canvas = document.getElementById(id)
        if (canvas == null)
            return false;
        var context = canvas.getContext("2d");
        //实践表明在不设施fillStyle下的默认fillStyle=black
        context.fillRect(0, 0, 100, 100);
        //实践表明在不设施strokeStyle下的默认strokeStyle=black
        context.strokeRect(120, 0, 100, 100);

        //设置纯色
        context.fillStyle = "red";
        context.strokeStyle = "blue";
        context.fillRect(0, 120, 100, 100);
        context.strokeRect(120, 120, 100, 100);

        //设置透明度实践证明透明度值>0,<1值越低，越透明，值>=1时为纯色，值<=0时为完全透明
        context.fillStyle = "rgba(255,0,0,0.2)";
        context.strokeStyle = "rgba(255,0,0,0.2)";
        context.fillRect(240, 0, 100, 100);
        context.strokeRect(240, 120, 100, 100);
        context.clearRect(50, 50, 240, 120);
    }

    function draw0(id) {
        var canvas = document.getElementById(id);
        if (canvas == null) {
            return false;
        }
        var context = canvas.getContext('2d');
        context.beginPath();
        context.arc(200, 150, 150, 0, Math.PI * 1.5, false);
        //不关闭路径路径会一直保留下去，当然也可以利用这个特点做出意想不到的效果
        context.closePath();
        context.fillStyle = 'rgba(0,255,0,0.25)';
        context.fill();
    }

    function draw1(id) {
        var canvas = document.getElementById(id);
        if (canvas == null)
            return false;
        var context = canvas.getContext("2d");
        context.fillStyle = "#EEEEFF";
        context.fillRect(0, 0, 400, 300);
        var n = 0;
        var dx = 150;
        var dy = 150;
        var s = 100;
        context.beginPath();
        context.fillStyle = 'rgb(100,255,100)';
        context.strokeStyle = 'rgb(0,0,100)';
        var x = Math.sin(0);
        var y = Math.cos(0);
        var dig = Math.PI / 15 * 11;
        for (var i = 0; i < 30; i++) {
            var x = Math.sin(i * dig);
            var y = Math.cos(i * dig);
            context.lineTo(dx + x * s, dy + y * s);
        }
        context.closePath();
        context.fill();
        context.stroke();

    }

    function draw26(id) {
        //同一个圆心画球型
        // var canvas = document.getElementById(id);
        // if (canvas == null)
        //     return false;
        // var context = canvas.getContext('2d');
        // var g1 = context.createRadialGradient(200, 150, 0, 200, 150, 100);
        // g1.addColorStop(0.1, 'rgb(255,0,0)');  
        // g1.addColorStop(1, 'rgb(50,0,0)');
        // context.fillStyle = g1;
        // context.beginPath();
        // context.arc(200, 150, 100, 0, Math.PI * 2, true);
        // context.closePath();
        // context.fill();

        //不同圆心看径向渐变模型
        var canvas = document.getElementById(id);
        if (canvas == null)
            return false;
        var context = canvas.getContext('2d');
        var g1 = context.createRadialGradient(100, 150, 10, 300, 150, 50);
        g1.addColorStop(0.1, 'rgb(255,0,0)');
        g1.addColorStop(0.5, 'rgb(0,255,0)');
        g1.addColorStop(1, 'rgb(0,0,255)');
        context.fillStyle = g1;
        context.fillRect(0, 0, 400, 300);

    }

    function draw20(id) {
        var canvas = document.getElementById(id);
        if (canvas == null)
            return false;
        var context = canvas.getContext("2d");

        var interal = setInterval(function() {
            move(context);
        }, 100);
    }

    var x = 100; //矩形开始坐标
    var y = 100; //矩形结束坐标
    var mx = 0; //0右1左
    var my = 0; //0下1上
    var ml = 1; //每次移动长度
    var w = 20; //矩形宽度
    var h = 20; //矩形高度
    var cw = 400; //canvas宽度
    var ch = 300; //canvas高度


    function move(context) {
        context.clearRect(0, 0, 400, 400);
        context.fillStyle = "#EEEEFF";
        context.fillRect(0, 0, 400, 400);
        context.fillStyle = "red";
        context.fillRect(x, y, w, h);
        if (mx == 0) {
            x = x + ml;
            if (x >= cw - w) {
                mx = 1;
            }
        } else {
            x = x - ml;
            if (x <= 0) {
                mx = 0;
            }
        }
        if (my == 0) {
            y = y + ml;
            if (y >= ch - h) {
                my = 1;
            }
        } else {
            y = y - ml;
            if (y <= 0) {
                my = 0;
            }
        }

    }
})();