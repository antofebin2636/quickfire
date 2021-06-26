<section class="client__wrapper">
    <div class="PageContainer">
        <span class="vr__title txt--vrTitle">our wonderful clients</span>
        <div class="clients">

            <div class="Section__columns">
                <header class="clients__header">
                    <h2 class="title" data-appear>Some of our current and former clients</h2>
                </header>
            </div>
            <div class="clients__flex" data-up>
                    <?php for ($c=0;$c<14;$c++){ ?>
                        <img src="<?php echo get_template_directory_uri() ?>/images/clients.jpeg" alt="">
                    <?php } ?>
            </div>

            <div class="client__carousel" data-up data-module="client">
                <div class="glide" data-carousel>
                    <div class="glide__track" data-glide-el="track">
                        <ul class="glide__slides">
                            <?php for ($c=0;$c<14;$c++){ ?>
                                <img src="<?php echo get_template_directory_uri() ?>/images/clients.jpeg" alt="">
                            <?php } ?>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>

</section>