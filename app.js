<html>
<head>
<title>app.js</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style type="text/css">
.s0 { color: #080808;}
.s1 { color: #0033b3;}
.s2 { color: #8c8c8c; font-style: italic;}
.s3 { color: #067d17;}
.s4 { color: #1750eb;}
</style>
</head>
<body bgcolor="#ffffff">
<table CELLSPACING=0 CELLPADDING=5 COLS=1 WIDTH="100%" BGCOLOR="#c0c0c0" >
<tr><td><center>
<font face="Arial, Helvetica" color="#000000">
app.js</font>
</center></td></tr></table>
<pre>
<span class="s1">function </span><span class="s0">tinhToan() {</span>

    <span class="s2">//</span>
    <span class="s1">let </span><span class="s0">ly = parseFloat(document.getElementById(</span><span class="s3">&quot;ly&quot;</span><span class="s0">).value);</span>
    <span class="s1">let </span><span class="s0">hoa = parseFloat(document.getElementById(</span><span class="s3">&quot;hoa&quot;</span><span class="s0">).value);</span>
    <span class="s1">let </span><span class="s0">sinh = parseFloat(document.getElementById(</span><span class="s3">&quot;sinh&quot;</span><span class="s0">).value);</span>
    <span class="s1">let </span><span class="s0">ketQua = document.getElementById(</span><span class="s3">&quot;ket-qua&quot;</span><span class="s0">);</span>
    <span class="s0">ketQua.innerHTML = </span><span class="s3">'Điểm Trung bình: ' </span><span class="s0">+ (ly + hoa + sinh)/</span><span class="s4">3</span><span class="s0">;</span>
<span class="s0">}</span>

<span class="s2">/* 
 
let a = parseInt(ly); 
let b = parseInt(hoa); 
let c = parseInt(sinh); 
 
let tb =  ; 
alert 
(tb)*/</span>
<span class="s1">function </span><span class="s0">nhietDo() {</span>
    <span class="s1">let </span><span class="s0">doC = parseFloat(document.getElementById(</span><span class="s3">'nhietdo'</span><span class="s0">).value);</span>
    <span class="s1">let </span><span class="s0">tinhNhietDo = document.getElementById(</span><span class="s3">&quot;nhiet-do&quot;</span><span class="s0">);</span>
    <span class="s0">tinhNhietDo.innerHTML = </span><span class="s3">'Nhiệt độ F là: ' </span><span class="s0">+ (doC * </span><span class="s4">9 </span><span class="s0">+ </span><span class="s4">160</span><span class="s0">)/</span><span class="s4">5</span><span class="s0">;</span>
<span class="s0">}</span>


<span class="s1">function </span><span class="s0">hinhTron() {</span>
    <span class="s1">let </span><span class="s0">hinhTron = parseFloat(document.getElementById(</span><span class="s3">'tron'</span><span class="s0">).value);</span>
    <span class="s1">let </span><span class="s0">dienTichTron = document.getElementById(</span><span class="s3">'dien-tich'</span><span class="s0">);</span>
    <span class="s0">dienTichTron.innerHTML = </span><span class="s3">'Diện tích hình tròn là: ' </span><span class="s0">+ (hinhTron * hinhTron)*Math.PI;</span>
<span class="s0">}</span>


<span class="s1">function </span><span class="s0">chuVi() {</span>
    <span class="s1">let </span><span class="s0">chuVi = parseFloat(document.getElementById (</span><span class="s3">'chuvi'</span><span class="s0">).value);</span>
    <span class="s1">let </span><span class="s0">chuViTron = document.getElementById(</span><span class="s3">'chu-vi'</span><span class="s0">);</span>
<span class="s0">chuViTron.innerHTML = </span><span class="s3">'Chu vi hình tròn là: ' </span><span class="s0">+ ( chuVi * </span><span class="s4">2</span><span class="s0">)* Math.PI;</span>
<span class="s0">}</span></pre>
</body>
</html>