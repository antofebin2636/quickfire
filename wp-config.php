<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'test_local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'LiFm~0DES]V*3l93~Z%w,BPWBg]r@_DMv!gI86aMvYBlx|io!3B-=3:Pj[4@>p$[' );
define( 'SECURE_AUTH_KEY',  '@g^%ii^h}$]>_p2?o=4hCimwD_#RvMH]R`r1n&v6A!!dr,(#fTAHg6Dd?)rgT7bs' );
define( 'LOGGED_IN_KEY',    '@fo[:QWyp+[~Z@>w]KH7n77~t}5G?LX*zE7<l]Z4fP-+$a]>]ql_3c  +%D:HPm_' );
define( 'NONCE_KEY',        '>c^d;n%(se&=nHs[,V,moA_YXkLuEUtE}y=G{DAq];[,W%%~k5:r&hh4eoofWK(0' );
define( 'AUTH_SALT',        'wdo%k$b5F@a#5n{[6F HpP>-.0N(k sMvF,-6+m}Zb9|Z7EkXHRyox+p!QfFil=T' );
define( 'SECURE_AUTH_SALT', ' 8m;WT9?T/^HeSCT=C0SKaKr_Rrvcqze#j+cksW}W}_[a_J>W/!j{=bCCs>kDkC-' );
define( 'LOGGED_IN_SALT',   'p;I.LGT]4dAc!%^oGmjK`0X/B*Qgj?2c:4E.gV$%]_O7H&&o^;s,<j%5;fnsX]:f' );
define( 'NONCE_SALT',       '`|Gks{@zui~R#r)0+9NCqB9KZJKa}iTaq[j~&Kh^]??= 1X^m8I8,!wjTuFLx_yZ' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
