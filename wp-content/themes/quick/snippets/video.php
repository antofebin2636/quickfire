<section class="home__video" data-module="video">
    <span class="vr__title video--vrTitle">Promotion Real</span>
    <div class="PageContainer">
        <div class="Section__columns">
           <div class="video__grid">
               <div class="videoImg__box" data-up>
                   <img src="<?php echo get_template_directory_uri()?>/images/video.jpeg" alt="">
                   <span class="video--play"><i class="fas fa-play"></i></span>
               </div>
           </div>

            <div class="video__content">
                <div class="Section__columns">
                    <div class="videoContent__header">
                        <h3 data-appear>Mercury Focuses its strengths of<br>business in the following industries</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="Section__columns">
            <div class="gr__grid wrap--box">
                <?php for ($g=0;$g<3;$g++) {?>

                    <div class="gr__box" data-show>
                        <span class="title">Property & Interiors</span>
                        <div class="gr__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                <?php } ?>
            </div>
            <div class="serviceCta">
                <a class="service--cta ct__tag" href="" data-up>Our Services</a>
            </div>

        </div>


    </div>
</section>


<div class="Popup__wrapper">
    <div class="Popup__flex">
        <div class="Popup__offset">
            <div class="Popup__content">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/528779272" width="640" height="360" frameborder="0" allowfullscreen></iframe>
            </div>
            <a class="Popup__cross close" title="Close popup" aria-label="Close popup">×</a>
        </div>
    </div>

    <div class="Popup__rear close"></div>
</div>