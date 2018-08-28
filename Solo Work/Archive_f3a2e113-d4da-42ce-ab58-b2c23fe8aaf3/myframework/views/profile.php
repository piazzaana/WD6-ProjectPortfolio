<?
    $text = file("assets/text.txt");
    foreach ($text as $item => $userData){
        $userInfo = explode("|",$userData);
    }
?>
<form class="card" style="margin-bottom:20px;">
    <img src="/assets/images/john-doe.jpg" alt="John" style="width:100%">
    <h1>Joe</h1>
    <p class="card-title"><?= $userInfo[2] ?></p>
    <div style="margin: 24px;">
        <a href="#"><i class="fa fa-dribbble card-a"></i></a>
        <a href="#"><i class="fa fa-twitter card-a"></i></a>
        <a href="#"><i class="fa fa-linkedin card-a"></i></a>
        <a href="#"><i class="fa fa-facebook card-a"></i></a>
</form>
</div>
