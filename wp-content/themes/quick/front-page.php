<?php include (locate_template ('header.php') ); ?>
<section>
<div class="homeBanner">
    <div class="homeBanner__container">
        <div class="homeBanner__row"><span class="scroller__txt">Scroll For more</span></div>
        <div class="homeBanner__content">
            <div class="homeBanner__overlay"></div>
            <div class="homeBanner__bg"  style="background-image: url('<?php echo get_template_directory_uri() ?>/images/hero-banner.jpg')">
                <h1 class="title">Mercury Communications <span class="title--border"></span><br>Luxury & Corporate Communications</h1>
            </div>
            <div class="homeBanner__link">
                <div class="homeBanner__linkWrapper">
                    <?php for($i=1;$i<4;$i++){ ?>
                        <div class="bannerLink__box" data-title="0<?php  echo $i;?>">
                            <span class="title">Belgrade</span>
                            <a href=""  class="main__title">The WaterFront</a>
                       </div>
    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</div>

</section>
<?php include (locate_template ('footer.php') ); ?>