<!DOCTYPE html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php pageTitle(); ?> | <?php siteName(); ?></title>
    <meta name="description" content="<?php siteDescription(); ?>">

    <link href="../assets/css/style.min.css" rel="stylesheet">
    <link href="//www.google-analytics.com" rel="dns-prefetch">
    <link href="//ajax.googleapis.com" rel="dns-prefetch">
    <!-- <script src="../assets/components/modernizr/modernizr.js"></script> -->
  </head>

  <body>

    <?php include 'includes/_header.php' ;?>

    <!-- Main Content Here -->
    <?php pageContent(); ?>

    <script src="../assets/js/vendor.js"></script>
    <script src="../assets/js/scripts.min.js"></script>

    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <!-- <script>
        (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='//www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
        ga('create','UA-XXXXX-X');ga('send','pageview');
    </script> -->
</body>
</html>
