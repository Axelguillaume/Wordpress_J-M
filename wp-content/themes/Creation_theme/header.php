<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
 <html xmlns="http://www.w3.org/1999/xhtml">
 <head profile="http://gmpg.org/xfn/11">
    <title>
    	<?php bloginfo('name') ?><?php if ( is_404() ) : ?> &raquo; <?php _e('Not Found') ?><?php elseif ( is_home() ) : ?> &raquo; <?php bloginfo('description') ?><?php else : ?><?php wp_title() ?><?php endif ?>
    </title>
    <meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
    <meta name="generator" content="WordPress <?php bloginfo('version'); ?>" /> <!-- leave this for stats -->
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css" media="screen" />
    <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="<?php bloginfo('rss2_url'); ?>" />
    <link rel="alternate" type="text/xml" title="RSS .92" href="<?php bloginfo('rss_url'); ?>" />
    <link rel="alternate" type="application/atom+xml" title="Atom 0.3" href="<?php bloginfo('atom_url'); ?>" />
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
    <link rel="stylesheet" href="<?php bloginfo('url'); ?>/wp-content/themes/Creation_theme/css/style.css" />
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity=" sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php bloginfo('url'); ?>/wp-content/themes/Creation_theme/font-awesome-4.6.3/css/font-awesome.min.css">
    
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,700" rel="stylesheet">
    <?php wp_head(); ?>   <?php wp_get_archives('type=monthly&format=link'); ?> <?php //comments_popup_script(); <?php wp_head(); ?>

</head> 
<body>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div id="page">
                        <div id="header"> 
                            <nav class="navbar navbar-default navbar-fixed-top">
                              <div class="container">
                                <!-- Brand and toggle get grouped for better mobile display -->
                                <div class="navbar-header">
                                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                  </button>
                                  <a class="navbar-brand" href="index.php"><img src="<?php bloginfo('url'); ?>/wp-content/themes/Creation_theme/images/logo_EXE.png" alt="logo" /></a>
                                </div>
                                <form class="navbar-form navbar-right">
                                    <button type="submit" class="btn"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                                    <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Search">
                                    </div>
                                </form>

                                <!-- Collect the nav links, forms, and other content for toggling -->
                                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                  <?php $defaults = array(
                                      'theme_location' => '',
                                      'menu' => 'menu-general',
                                      'container' => '',
                                      'container_class' => 'navbar navbar-default navbar-fixed-top',
                                      'container_id' => '',
                                      'menu_class' => 'menu',
                                      'menu_id' => '',
                                      'echo' => true,
                                      'fallback_cb' => 'wp_page_menu',
                                      'before' => '',
                                      'after' => '',
                                      'link_before' => '',
                                      'link_after' => '',
                                  'items_wrap' => '<ul class="nav navbar-nav navbar-left" style="padding:0 10px 0 10px">%3$s</ul>',
                                  'depth' => '',
                                    'walker' => ''
                                  );
                                  wp_nav_menu( $defaults );
                                  ?>
                                </div><!-- /.navbar-collapse -->
                              </div><!-- /.container-fluid -->
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

