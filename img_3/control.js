var imgId = 3, imgNum=20;
var img_size_w = [0, 6772, 3222, 1383, 7523, 4983, 6884,3428 , 2928, 4479, 2652, 2834, 4214, 2456, 4425, 3141, 2163,  2672, 4614, 3621, 4372];
var img_size_h = [0, 5080, 4425, 1862, 2362, 3316, 5376, 2455, 3921, 2873, 3793, 4098, 2655, 3541, 2768, 2970, 1240,  3851, 3156, 2546, 2843];
var img_txt = ['',
  "望北海<br>（英）费利斯·比托（Felice Beato）<br>摄于1860年10月29日", 
  '琼华岛北部<br>约摄于1930年代后期', 
  '琼华岛北麓<br>（德）阿尔方斯·冯·穆默（Alfons von Mumm）<br>摄于1900-1901年', 
  '琼华岛北麓<br>摄于民国时期', 
  '琼华岛东南麓雪景<br>（德）赫达·莫里逊（Hedda Morrison）<br>约摄于1933至1946年', 
  
  '北望琼华岛<br>（美）西德尼·戴维·甘博（Sidney David Gamble）<br>摄于1917-1919年', 
  '从琼华岛上南望<br>约拍摄于1935年', 
  '承光右门<br>（瑞典）喜仁龙(Osvald Siren）<br>摄于1922年', 
  '白玉佛<br>（瑞典）喜仁龙(Osvald Siren）<br>摄于1922年', 
  '玉瓮亭<br>（法）菲尔曼·拉里贝（Firmin Laribe）<br>约摄于1900年代', 
   
  '“遮荫侯”古树<br>（瑞典）喜仁龙(Osvald Siren）<br>摄于1922年', 
  '敬跻堂<br>（瑞典）喜仁龙(Osvald Siren）<br>摄于1922年', 
  '白塔与善因殿<br>（美）西德尼·戴维·甘博（Sidney David Gamble）<br>摄于1917-1919年', 
  '	五龙亭<br>（瑞典）喜仁龙(Osvald Siren）<br>摄于1922年', 
  '五龙亭之龙泽亭<br>约摄于1940年代', 

  '万佛楼前牌楼<br>（美）约翰·詹布鲁恩（John D. Zumbrum）<br>约摄于1910-1920年代', 
  '大慈真如宝殿内铜塔<br>（法）菲尔曼·拉里贝（Firmin Laribe）<br>约摄于1900年代', 
  '静心斋小玉带桥<br>（法）菲尔曼·拉里贝（Firmin Laribe）<br>约摄于1900年代', 
  '罨画轩<br>（瑞典）喜仁龙(Osvald Siren)<br>摄于1922年', 
  '沁泉廊<br>（瑞典）喜仁龙(Osvald Siren）<br>摄于1922年', 
];

var w_ratio = 0.9, h_ratio = 0.9;
// document.getElementById("new").style.width =  document.body.clientWidth * 0.5 + 'px';
// alert(document.body.clientWidth);


// 初始化 设定初始界面
window.onload = function(){
  // alert("横屏显示效果更佳！");

  var obj_new = document.getElementById("new");

  obj_new.style.backgroundImage = "url('../resource/" + imgId + "_new.jpg')";
  var obj_old = document.getElementById("old_img");
  // var mainDiv = document.getElementById("mainDiv");

  obj_old.src = "../resource/" + imgId + "_old.jpg";

  var cr_width = document.documentElement.clientWidth * w_ratio;
  var cr_height = document.documentElement.clientHeight * h_ratio;
  obj_new.style.width = img_size_w[imgId] + 'px';
  obj_new.style.height = img_size_h[imgId] + 'px';

  // obj_old.offsetParent.style.width = '500px';
  // obj_new.style.textAlign = 'right';

  // document.getElementById("new").style.width =  document.body.clientWidth * 0.9 + 'px';
  if(obj_new.offsetWidth>cr_width || obj_new.offsetHeight>cr_height){
    adjustImgSize(obj_new, imgId, false);
    // alert('调整过尺寸了！！！');  
    // alert(cr_width + ', ' + cr_height+ ', ' + obj_new.offsetWidth + ', ' + obj_new.offsetHeight);

    // document.getElementById('demo').innerHTML = '('+obj_new.offsetWidth+', '+obj_new.offsetHeight+')';
  }
  else{
    // alert('没有进if');
    document.getElementById("new").style.width =  cr_width + 'px';
  }
  // alert(cr_width + ', ' + cr_height+ ', ' + obj_new.offsetWidth + ', ' + obj_new.offsetHeight);
  document.getElementById('tx').innerHTML = img_txt[imgId];
}

// 强制旋转
function rotatePage(){
  if (window.orientation === 180 || window.orientation === 0) { 
    // alert('竖屏状态！');
    mainDiv = document.getElementById('mainDiv');
    mainDiv.style.transform = 'rotate(90deg)';
   } 
}

window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
  var ishorizontal = false;
  if (window.orientation === 180 || window.orientation === 0) { 
    ishorizontal = true;
    var obj_new = document.getElementById("new");
    var cr_width = document.documentElement.clientWidth * w_ratio;
    var cr_height = document.documentElement.clientHeight * h_ratio;
    obj_new.style.width = img_size_w[imgId] + 'px';
    obj_new.style.height = img_size_h[imgId] + 'px';
    console.log(obj_new.offsetWidth, obj_new.offsetHeight, cr_width, cr_height, ishorizontal);

    // document.getElementById("new").style.width =  document.body.clientWidth * 0.9 + 'px';
    // if(obj_new.offsetWidth>cr_width || obj_new.offsetHeight>cr_height){
    adjustImgSize(obj_new, imgId, ishorizontal);

  } 
  if (window.orientation === 90 || window.orientation === -90 )
  { 
    // this.alert('横屏');
    ishorizontal = true;
    var obj_new = document.getElementById("new");
    var cr_width = document.documentElement.clientWidth * w_ratio;
    var cr_height = document.documentElement.clientHeight * h_ratio;
    obj_new.style.width = img_size_w[imgId] + 'px';
    obj_new.style.height = img_size_h[imgId] + 'px';
    // document.getElementById("new").style.width =  document.body.clientWidth * 0.9 + 'px';
    // if(obj_new.offsetWidth>cr_width || obj_new.offsetHeight>cr_height){
    adjustImgSize(obj_new, imgId, ishorizontal);
    // console.log('窗口大小：', cr_width, cr_height);
      // alert('调整过尺寸了！！！');  
      // alert(cr_width + ', ' + cr_height+ ', ' + obj_new.offsetWidth + ', ' + obj_new.offsetHeight);

      // document.getElementById('demo').innerHTML = '('+obj_new.offsetWidth+', '+obj_new.offsetHeight+')';
    // }
    // else{
    //   // alert('没有进if');
    //   alert('横屏状态else！');
    //   document.getElementById("new").style.width =  cr_width + 'px';
    // }
  } 
 }, false);


function getMousePos(event){
    // var e = event || window.event
    // document.getElementById("demo2").innerHTML={'x': e.screenX, 'y': screenY};
    // return {'x': e.screenX, 'y': screenY}
    // alert('x: '+event.offsetX + " y: "+ event.offsetY);
    // document.getElementById("demo2").innerHTML='x: '+event.offsetX + " y: "+ event.offsetY;
    var myImg = document.getElementById("old");
    var div_new = document.getElementById("new");
    const width_n = div_new.offsetWidth;
    const height_n = div_new.offsetHeight;

    div_new.offsetWidth = width_n;
    myImg.style.right = '0px';

    if (event.clientX < div_new.offsetLeft) return;
    myImg.style.width = width_n - event.clientX + div_new.offsetLeft + 'px';
    // myImg.style.width = event.offsetX<=width_n?event.offsetX+"px":width_n+"px"; //event.offsetX
    myImg.style.height = height_n; //event.offsetX
    // div_new.style.textAlign = 'right';
    
    // myImg.style.left = event.clientX - div_new.offsetLeft + 'px';

    // console.log(event.clientX, event.offsetLeft);
    // document.getElementById("pageX").innerHTML='window.orientation:  '+window.orientation;
}

// document.onmousedown = function(e){
//   console.log('PC click!!!');
// }

// document.ontouchstart = function (e)
// {
//   alert('手机click!!!');
// }


// 滑动事件
document.addEventListener("touchmove",function(evt){    //获取style中的整数值
  evt.preventDefault();
  var touch=evt.touches[0];                           // 第一个触碰点

  var myImg = document.getElementById("old");
  var div_new = document.getElementById("new");
  const width_n = div_new.offsetWidth;
  const height_n = div_new.offsetHeight;

  div_new.offsetWidth = width_n;
  myImg.style.right = '0px';

  if (touch.clientX < div_new.offsetLeft) return;
  if (touch.clientY > div_new.offsetHeight+div_new.offsetTop) return;
  if (touch.clientY < div_new.offsetTop) return;
  myImg.style.width = width_n - touch.clientX + div_new.offsetLeft + 'px';
  // myImg.style.width = event.offsetX<=width_n?event.offsetX+"px":width_n+"px"; //event.offsetX
  myImg.style.height = height_n; //event.offsetX
 },false)

// 图片适配屏幕
function adjustImgSize(object, id, ishorizontal){
  // alert('hello');

  var cr_width, cr_height;
  
  if (ishorizontal){
    cr_height = document.documentElement.clientWidth * h_ratio;
    cr_width = document.documentElement.clientHeight * w_ratio;
  }
  else{
    cr_width = document.documentElement.clientWidth * w_ratio;
    cr_height = document.documentElement.clientHeight * h_ratio;
  }


  // console.log('窗口大小：', cr_width, cr_height);
  var div_head = document.getElementById('head');

  var ratio = img_size_w[id] * 1.0 / img_size_h[id]; //宽高比

  // 比较照片的宽高比与屏幕的宽高比
  if (ratio > cr_width/cr_height){    // 过于宽了 推荐横屏
    // alert('横屏显示效果更佳！');
    object.style.width = cr_width + 'px';
    object.style.height = cr_width / ratio + 'px';
    div_head.style.height = (1 - cr_width / ratio/ cr_height) * 0.3 * cr_height + 'px';
    // console.log(object.offsetWidth, object.offsetHeight, cr_width, cr_height);
    console.log('距离上边距长度：', object.offsetTop);
    if (object.offsetHeight + object.offsetTop + document.getElementById('div_tx').offsetHeight > cr_height) {
      div_head.style.height = '0px';
      object.style.height = cr_width / ratio * 0.8 + 'px';
    }
  }
  else{
    // alert('旋转之后进else 过于窄了');
    object.style.height = cr_height + 'px';
    object.style.width = cr_height * ratio+ 'px';
    div_head.style.height = (1 - cr_width / ratio/ cr_height) * 0.0 * cr_height + 'px';

  }

  
  console.log('页面大小:',cr_width, cr_height, object.style.width+', '+object.style.height);
}

