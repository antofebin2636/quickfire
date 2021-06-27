<section class="imageGrid">
    <span class="vr__title grid--vrTitle">case studies</span>
    <div class="PageContainer">
        <div class="imageGrid__header">
            <div class="Section__columns">
                <div class="imageHeader__primary">
                    <h2 class="title" data-appear>Mercury enim and consectetur<br>adipiscing elit,sed go</h2>
                    <div class="show__desk">
                        <a href="" class=" ct__tag case__cta" data-up>All case studies</a>
                    </div>
                </div>
                <div class="imageHeader__secondary" data-up>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div class="show__mob" data-up>
                        <a href="" class=" ct__tag case__cta">All case studies</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="Section__columns">
            <div class="imageGrid__column " data-up>
                <?php for($r=0;$r<5;$r++) {?>
                <div class="imageGrid__box" >
                    <div class="imageGrid__boxWrapper">
                        <a href="" class="imageGrid__boxPop">NORTHACRE<span>London</span></a>
                        <img src="<?php echo get_template_directory_uri() ?>/images/grid.png" alt="">
                    </div>

                </div>
                <?php } ?>
            </div>
        </div>

        
    </div>
</section>