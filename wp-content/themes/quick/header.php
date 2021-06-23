<?php
/* ------------------------------------------------------
| 🗣 Header - Header
|--------------------------------------------------------
Use this to create your global site header, also including a 'main' wrapper which is finished in footer.php
---------------------------------------------------------
*/
?>
<?php include( locate_template('head.php') ); ?>

<header class="Header" data-module="header">
   <div class="headerBanner">
        <div class="headerBanner__inner">
        
            <div class="headerBanner__logo">
                <img src="<?php echo get_template_directory_uri() ?>/images/logo.png" alt="">
            </div>
            <div class="headerBanner__menu">
            <div class="headerBanner__menu--item">
            <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
            </div>
                
            </div>
        </div>
   </div>
</header>

<main role="main">