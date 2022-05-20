<?php
  $filter = $_POST['filter']; 
?>
<?php
  $title = $_POST['title']; 
?>
<?php
  $sizeText = $_POST['sizeText']; 
?>
<?php
  $colorText = $_POST['colorText']; 
?>
<?php
  $price = $_POST['price']; 
?>
<?php
  $all = $_POST['all']; 
?>
<!doctype html>
<html lang="ko">
  <head>
  <meta charset="utf-8">
    <title>HTML</title>
    <style>
    </style>
  </head>
  <body>
    <section>
        <h2>구매정보 테스트</h2>
        <ul>
            <li><em>filter : <?php echo $filter ?></em></li>
            <li><em>title : <?php echo $title ?></em></li>
            <li><em>sizeText : <?php echo $sizeText ?></em></li>
            <li><em>colorText : <?php echo $colorText ?></em></li>
            <li><em>price : <?php echo $price ?></em></li>
            <li><em>all : <?php echo $all ?></em></li>
        </ul>
    </section>

  </body>
</html>