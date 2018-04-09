<?php
header('Content-Type:application/json; charset=utf-8');
header('Access-Control-Allow-Methods:GET,PUT,POST,DELETE');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header('Access-Control-Allow-Credentials:true');
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '*';
header('Access-Control-Allow-Origin:'. $origin);

function __echo__($json){
    $json = is_array($json) ? json_encode($json) : $json;
    $_start = "";
    $_end = "";
    if(isset($_GET["callback"])){
        $_start = $_GET["callback"] . "(";
        $_end = ")";
    }
    if(isset($_GET["debug"])){
        $json = json_decode($json,true);
        echo '$json = ';
        var_export($json);
        echo ';';
        return;
    }
    echo $_start.$json.$_end;
}

$dirArray = explode('?', $_SERVER['REQUEST_URI']);
$dir = $dirArray[0];
$dir2 = $dirArray[1];

if($dir2){
  $paramEndIdx=strpos($dir2,'&');
  if($paramEndIdx){
    $dir2=substr($dir2,0,$paramEndIdx);
  };
  $dir = $dir .'/'. $dir2;
  $dir;
}

if(isset($_GET["f"])){
  $fileName = $_GET["f"];

}else{
    $fileName = "index";
}

$file = dirname($_SERVER['DOCUMENT_ROOT']) . $dir . '/'.$fileName.'.php';

if(file_exists($file)){
    $json = '';
    include dirname($_SERVER['DOCUMENT_ROOT']) . $dir . '/'.$fileName.'.php';
    __echo__($json);
}else{
    include dirname($_SERVER['DOCUMENT_ROOT']) . $dir . '/'.$fileName.'.json';
}


