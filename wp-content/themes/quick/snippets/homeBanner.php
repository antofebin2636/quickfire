
    <section>
        <div class="homeBanner" data-module="banner">
            <div class="homeBanner__container">
                <div class="homeBanner__row"><span class="scroller__txt">Scroll For more</span></div>
                <div class="homeBanner__content">
                    <div class="homeBanner__overlay"></div>
                    <div class="homeBanner__bg"  style="background-image: url('<?php echo get_template_directory_uri() ?>/images/hero-banner.jpg')">
                        <h1 class="title" data-appear >Mercury Communications <span class="title--border" data-line></span><br>Luxury & Corporate Communications</h1>
                    </div>
                    <div class="homeBanner__link">
                        <div class="homeBanner__linkWrapper">
                            <?php for($i=1;$i<4;$i++){ ?>
                                <div class="bannerLink__box" data-show data-title="0<?php  echo $i;?>">
                                    <span class="title">Belgrade</span>
                                    <a href=""  class="main__title">The WaterFront</a>
                                </div>
                            <?php } ?>
                        </div>
                    </div>

                        <div class="bannerLink__carousel" data-module="banner" data-up>
                            <div class="glide" data-carousel>
                                <div class="glide__track" data-glide-el="track">
                                    <div class="glide__slides">
                                        <?php for($c=1;$c<4;$c++){ ?>
                                            <div class="bannerLink__box" data-show data-title="0<?php  echo $c;?>">
                                                <span class="title">Belgrade</span>
                                                <a href=""  class="main__title">The WaterFront</a>
                                            </div>
                                        <?php } ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>

    </section>
