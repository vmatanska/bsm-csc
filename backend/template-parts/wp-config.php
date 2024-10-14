<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bsmdir_wp_mclby' );

/** Database username */
define( 'DB_USER', 'bsmdir_wp_eafqh' );

/** Database password */
define( 'DB_PASSWORD', 'D66oJ%uEb5^%S^5c' );

/** Database hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '9A-LW*:Tg3&5_bg09|A7(W)9FQ28o*6+;iYjO]~Ks9u_-)_Ss++CKD|D72VZ7ZI8');
define('SECURE_AUTH_KEY', ':3:2R03Dc*2C@vdY4)Yfr**FA5%Q]zar/VSedXk25&nEy(y;(9rF;Xji#4d)834z');
define('LOGGED_IN_KEY', 'dnVvyav31/i+&%11RB(;35%Im7:#6a5PM:;tOP23%~2rI7XG52xLt)72p/Z#a&7G');
define('NONCE_KEY', 'I()*:@Qw0Pz&W!thj4unr#pEnbrui+XPk1zv*l;15A_6)|Q:1Rnhd~h%@b24%56a');
define('AUTH_SALT', 'm5];~tC)z!6jcrBe]0sWD6!!7fqK2aH@6*77odk(9I7&X)lk@E&/N50O2cw*Tht9');
define('SECURE_AUTH_SALT', 'n2T|(JW7Mz97tyY00#7Pvk:O|6)|E8E(GUS71ZC2(*R3FR!Ufra8AdK8|vDG0%8S');
define('LOGGED_IN_SALT', '9EW3+t86506%H]V72P&ML7j(B5MCX3G*qd26!piNkTs6%A0(PR*q|bAFB*e9###a');
define('NONCE_SALT', 'm@R5!33-93SI)Hs9qA-q;/-2Lw2X#24ZbrjAb]exFSU+1wv5-lK%;R5dMlYfiXY4');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'tlwhs_';


/* Add any custom values between this line and the "stop editing" line. */

define('WP_ALLOW_MULTISITE', true);
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
//if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', true );
//}
//if ( ! defined( 'WP_DEBUG_LOG' ) ) {
	define( 'WP_DEBUG_LOG', 'tmp/wp-errors.log' );
//}
//if ( ! defined( 'WP_DEBUG_DISPLAY' ) ) {
	define( 'WP_DEBUG_DISPLAY', true );
//}
define( 'GRAPHQL_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
