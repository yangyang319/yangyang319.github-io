/**
 * Created by aer on 2016/11/16.
 */
function getHexColor() {
    var str = "#";
    var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    for (var i = 0; i < 6; i++) {
        var random = Math.floor(Math.random() * 16);
        str += arr[random];
    }
    return str;
}
//创建对象来保存评论的信息
var review = {
    nickName: function () {
        var arr = ["党国领袖", "熊猫伊丽单", "利齿路西法", "丶蛋疼灬", "火之不舞 ", "冰冻排骨", "一杯浆三杯鸡 ", "风一样的射手", "丨夢丶嫣然丨", "诗语涵轩 "];
        var index = Math.floor(Math.random() * 10);
        return arr[index];
    },
    img: function () {
        var arr = ["24721131-avatar.jpg", "33260169-avatar.jpg", "40714550-avatar.jpg", "53490931-avatar.jpg", "53528648-avatar.jpg ", "54810312-avatar.jpg", "57239396-avatar.jpg ", "57906634-avatar.jpg", "59107317-avatar.jpg", "71353964-avatar.jpg "];
        var index = Math.floor(Math.random() * 10);
        return arr[index];
    },
    profession: function () {
        var arr = ["110 兽人 死亡骑士", "110 熊猫人 潜行者", "110 巨魔 猎人", "110 德莱尼 萨满祭司", "110 血精灵 猎人 ", "100 牛头人 德鲁伊", "110 亡灵 法师 ", "87 熊猫人 武僧", "110 血精灵 恶魔猎手", "103 血精灵 圣骑士 "];
        var index = Math.floor(Math.random() * 10);
        return arr[index];
    },
    guild: function () {
        var arr = ["三生三世 十里桃花", "五火球神教", "冰冠堡垒", "非橙勿扰", "浪漫贵族 ", "守望黎明", "信仰至上 ", "光芒之桥", "王下七武海", "龙骨平原 "];
        var index = Math.floor(Math.random() * 10);
        return arr[index];
    },
    area: function () {
        var arr = ["布兰卡德", "艾露恩", "燃烧之刃", "无尽之海", "太阳之井 ", "阿曼尼", "时光之穴 ", "白银之手", "麦维影歌", "亚雷戈斯 "];
        var index = Math.floor(Math.random() * 10);
        return arr[index];
    },
    content: function () {
        var arr = ["马上又要重返风暴要塞 重返黑暗神殿 重返太阳井", "巫妖王九九八十一怒", "说的太经典了，MC 黑翼马上就要重返，无限循环200级", "熊猫人还迷 军团又来了", "少一个德拉诺王中王 ", "到时候我估计DH职业任务里面会有夺回黑暗神殿了", "烧撤退，巫妖王再怒，大地合拢，熊猫人谜中谜。 ", "只想说傻逼真尼玛多！！！", "你忘了？你已经回黑暗神殿体验伊利丹了", "祖阿曼。。。一度被遗忘了的国度 "];
        var index = Math.floor(Math.random() * 10);
        return arr[index];
    }
};

$(function () {
    //导航效果
    $(window).scroll(function () {
        var top = $(this).scrollTop();
        if (top > 40) {
            $("#nav-menu a").addClass("scrollafter");
            $("#nav-menu").addClass("nav-menu-scroll");
            $(".nav").addClass("nav-scroll");
            $("#nav-logo a img").css({"width": "70px", "height": "70px", "overflow": "hidden", "src": "images/game-icons-70.png"});
            $("#nav-logo").css({"top": "-8px", "left": "41px"});
        } else {
            $("#nav-menu a").removeClass();
            $("#nav-menu").removeClass("nav-menu-scroll");
            $(".nav").removeClass("nav-scroll");
            $("#nav-logo a img").css({"width": "256px", "height": "103px", "src": "images/Logo-wow-cn-25ed322fb2.png"});
            $("#nav-logo").css({"top": "-10px", "left": "-110px"});
        }
    });

    //添加20个评论
    for (var i = 0; i < 20; i++) {
        $('<li class="review-item">' +
            '<div class="review-title clearfix">' +
            '<div class="review-title-l fl">' +
            '<img src="images/review/' + review.img() + '" alt="">' +
            '</div>' +
            '<div class="review-title-m fl">' +
            '<p class="review-title-m-1">' +
            '<a href="javascript:void(0)">' + review.nickName() + '</a>' +
            '<span>10月17日</span>' +
            '</p>' +
            '<p class="review-title-m-2">' + review.profession() + '</p>' +
            '<p class="review-title-m-3">' +
            '<a href="javascript:void(0)">' + review.guild() + '</a>' +
            '</p>' +
            '<p class="review-title-m-4">' + review.area() + '</p>' +
            '</div>' +
            '<div class="review-title-r fr">+1584</div>' +
            '</div>' +
            '<p class="review-main">' + review.content() + '</p>' +
            '<p class="review-reply">' +
            '<a>回复</a>' +
            '</p>' +
            '</li>').appendTo($("#review-list"));
    }



    var timer;
    //点击按钮弹出视频
    $("#videoBtn").click(function () {
        $("#modal").css("display", "block");
        //获取所有的review-main
        timer = setInterval(barrage ,1000);
        $("#vio").html('<video src="videos/7156979-1_libtheora_001.ogv" height="600" autoplay controls id="vid"></video>');
    });
    //开关灯效果
    $("#heed img").click(function () {
        if ($(this).text() == "关灯") {
            $("#modal").css("backgroundColor", "rgba(0, 0, 0, 1)");
            $(this).text("开灯");
        } else {
            $("#modal").css("backgroundColor", "");
            $(this).text("关灯");
        }
    });
    //点击遮挡层时视频消失
    $("#video-cloud").click(function () {
        $("#modal").css("display", "none");
        clearInterval(timer);
        $("#vio").html('<video src="videos/7156979-1_libtheora_001.ogv" height="600" controls id="vid"></video>');
    });




    //弹幕效果
    function barrage() {
        var reviewMain = $(".review-main");
        var index = Math.floor(Math.random() * 10);
        var top = Math.floor(Math.random() * ($("#video-bar").height() - 300) + 50);
        var color = getHexColor();
        var size = Math.floor(Math.random() * 10 + 14) + "px";
        //将每一个评论的内容添加到video-bar中并且移动
        $("<p>"+$(reviewMain[index]).text()+"</p>").appendTo($("#video-bar")).css({"position": "absolute", "top": ""+top+"px", "left": "-300px", "color": ""+color+"", "whiteSpace": "nowrap", "fontSize": ""+size+""}).animate({"left": "900px"}, 15000, function () {
            $(this).remove();
        });
    }

    //添加评论
    $("#addreview-btn").click(function () {
        var txt = $("#addreview-txt").val();
        if (txt.length != 0) {
            $("#review-list").prepend($('<li class="review-item">'+
                '<div class="review-title clearfix">'+
                '<div class="review-title-l fl">' +
                '<img src="images/review/'+review.img()+'" alt="">'+
                '</div>'+
                '<div class="review-title-m fl">'+
                '<p class="review-title-m-1">'+
                '<a href="javascript:void(0)">'+review.nickName()+'</a>'+
                '<span>10月17日</span>'+
                '</p>'+
                '<p class="review-title-m-2">'+review.profession()+'</p>'+
                '<p class="review-title-m-3">'+
                '<a href="javascript:void(0)">'+review.guild()+'</a>'+
                '</p>'+
                '<p class="review-title-m-4">'+review.area()+'</p>'+
                '</div>'+
                '<div class="review-title-r fr">+1584</div>'+
                '</div>'+
                '<p class="review-main">'+txt+'</p>'+
                '<p class="review-reply">'+
                '<a>回复</a>'+
                '</p>'+
                '</li>'));

            $("#addreview-txt").val("");
        }
    });

    //发送弹幕
    $("#transmit-btn").click(function () {
        var txt = $("#transmit-txt").val();
        if (txt.length != 0) {
            var top = Math.floor(Math.random() * ($("#video-bar").height() - 300) + 50);
            var color = getHexColor();
            var size = Math.floor(Math.random() * 10 + 14) + "px";
            $("<p>"+txt+"</p>").appendTo($("#video-bar")).css({"position": "absolute", "top": ""+top+"px", "left": "-400px", "color": ""+color+"", "whiteSpace": "nowrap", "fontSize": ""+size+""}).animate({"left": "900px"}, 15000, function () {
                $(this).remove();
            });

            $("#transmit-txt").val("");
        }
    });

    //取消弹幕
    $("#transmit-closebtn").click(function () {
        if ($(this).val() == "取消弹幕") {
            $("#video-bar p").remove();
            $(this).val("开始弹幕");
            clearInterval(timer);
        } else {
            timer = setInterval(barrage ,1000);
            $(this).val("取消弹幕");
        }
    });


});