/*Get width of headings when inside articles */
var width = window.innerWidth;
var eightywidth = width * 0.8;
var fourtyeighty = eightywidth * 0.4;
var widthofheading = eightywidth + 60;
/*Get width when inside of sections*/
var fourtyeightywidth = width * 0.32;
var fourtywidthofheading = fourtyeightywidth + (fourtyeightywidth/2);
document.head.innerHTML += "<meta http-equiv='x-ua-compatible' content='ie=edge'> <meta charset='utf-8'> <link rel='apple-touch-icon' href='leavinth.github.io/images/customicon.png'> <meta name='msapplication-config' content='browserconfig.xml' />"
document.head.innerHTML += "<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet'>"
document.head.innerHTML += "<style>*{text-align: center;}header{position: relative;top: -10px;left: 0%;font-family: 'Oswald', sans-serif;width: 100%;box-shadow: 5px 3px 10px 1px #999999;background: #fafafa;margin-bottom: 40px;border-bottom-right-radius: 5px;border-bottom-left-radius: 5px;}a{text-decoration: none;color: black;}a:hover{color: rgb(50,50,50)}body{background-color: #f2f2f2;background-size: 100%;background-repeat: repeat-y;}article{font-family: 'Open-Sans', sans-serif;margin: auto;width:"+eightywidth+"px;box-shadow: 5px 3px 10px 1px #999999;background: #fafafa;margin-bottom: 40px;padding: 30px;border-radius: 5px;letter-spacing: 0.05px;word-spacing: 1px;}p{text-align: left;}li{text-align: left;} article > h3, article > h2{position:relative;left:-30px;margin:0%;width:"+widthofheading+"px;background:rgba(100,100,100,0.5);}footer{background: #fafafa;position: fixed;top: 96%;left: 0%;border-top-right-radius: 5px;border-top-left-radius: 5px;letter-spacing: 0.05px;word-spacing: 1px;box-shadow: 5px 3px 10px 1px #999999;width:100%;height: 4%;}#gameContainer{position:relative;margin: auto;}section{position: relative;font-family: 'Open-Sans', sans-serif;box-shadow: 5px 3px 10px 1px #999999;background: #fafafa;padding: 30px;border-radius: 5px;letter-spacing: 0.05px;word-spacing: 1px;width:"+fourtyeighty+"px;margin: 5px;display: inline-block;}section:hover{box-shadow: 6px 4px 11px 2px #999999;background: #ffffff;}section p {postion: absolute;top: 50%;width: 100%;text-align: center;}section img {width: 90%;}.drop{width:90%;}.drop div{display: none;position: relative;z-index: 1;}.drop:hover{height:300px;}.drop:hover div{display: block;height:100px;}.drop:hover div p {font-size:100%;} header h1{margin:5px;} header h2{margin:0px;} nav{margin:'auto';background:rgba(100,100,100,0.5);border-bottom-left-radius:5px; border-bottom-right-radius:5px;} section > h3, section > h2{position:relative;left:-30px;margin:0%;width:"+fourtyeighty+"px;background:rgba(100,100,100,0.5);} section a:hover {color: rgb(100,100,100);}</style>";
