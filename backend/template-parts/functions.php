<?php
/**
 * Twenty Twenty-Four functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Twenty Twenty-Four
 * @since Twenty Twenty-Four 1.0
 */
////////////////////////////////////////////////////////
/*
use WP_Post;
use WPGraphQL\Model\Post;

class PaginationFields {
    public function register_hooks() {
        add_action( 'graphql_register_types', [ $this, 'register_post_fields' ] );
    }

    public function register_post_fields() {
        register_graphql_fields('Post', [
            'previousPost' => [
                'type'        => 'Post',
                'description' => __( 'Previous post', 'hwp-rockers' ),
                'resolve'     => function( Post $resolving_post ) {
                    if ( is_post_type_hierarchical( $resolving_post->post_type ) ) {
                        $previous_post_id = get_previous_page_id( $resolving_post );
                        return $previous_post_id ? new Post( $previous_post_id ) : null;
                    }

                    $post = get_post( $resolving_post->postId );
                    $GLOBALS['post'] = $post;
                    setup_postdata( $post );
                    $previous_post = get_previous_post();
                    wp_reset_postdata();

                    return $previous_post ? new Post( $previous_post ) : null;
                }
            ],
            'nextPost' => [
                'type'        => 'Post',
                'description' => __( 'Next post', 'hwp-rockers' ),
                'resolve'     => function( Post $resolving_post ) {
                    if ( is_post_type_hierarchical( $resolving_post->post_type ) ) {
                        $next_post_id = get_next_page_id( $resolving_post );
                        return $next_post_id ? new Post( $next_post_id ) : null;
                    }

                    $post = get_post( $resolving_post->postId );
                    $GLOBALS['post'] = $post;
                    setup_postdata( $post );
                    $next_post = get_next_post();
                    wp_reset_postdata();

                    return $next_post ? new Post( $next_post ) : null;
                }
            ],
        ]);
    }

    private function get_previous_page_id( Post $page ): int {
        return get_adjacent_page_id( $page, -1 );
    }

    private function get_next_page_id( Post $page ): int {
    	return get_adjacent_page_id( $page, 1 );
    }

    /*
     * @param WP_Post $page      Page Object.
     * @param int     $direction Integer -1 or 1 indicating next or previous post.
     *
     * @return int Adjacent page id, or 0 if none.
     *//*
    private function get_adjacent_page_id( WP_Post $page, int $direction ): int {
        $args = [
            'post_type'      => $page->post_type,
            'order'          => 'ASC',
            'orderby'        => 'menu_order',
            'post_parent'    => $page->post_parent,
            'fields'         => 'ids',
            'posts_per_page' => -1
        ];

        $pages = get_posts( $args );
        $current_key = array_search( $page->ID, $pages );
        $does_adjacent_page_exist = isset( $pages[ $current_key + $direction ] );

        if ( $does_adjacent_page_exist ) {
            return $pages[ $current_key + $direction ];
        }

        return 0;
    }
}*/

use WPGraphQL\AppContext;
use WPGraphQL\Data\DataSource;
use WPGraphQL\Model\News;

/**
 * Plugin Name: WpGraphQL Previous, Next and Random Post Plugin
 * Plugin Description: This plugin adds previous, next and random post to the WPGraphQL schema for posts.
 * Author: @ozcancelik
 * Author URI: https://github.com/ozcancelik
 * Version: 0.0.1
 */


add_action('graphql_register_types', 'register_news_object_fields');
function register_news_object_fields() {

    // Previous News 
    register_graphql_field('News', 'previousPost', [
        'type' => 'News',
        'description' => __(
            'Previous News'
        ),

        'resolve' => function (WPGraphQL\Model\Post $news, array $args, AppContext $context) {
            global $news;
            $news = get_post($news->ID);
			
            setup_postdata($news);
            $prev = get_adjacent_post(false, '', true);
            wp_reset_postdata();
            if (!$prev) {
                return null;
            }
            return DataSource::resolve_post_object($prev->ID, $context);
        },
    ]);

    // Next News 
    register_graphql_field('News', 'nextPost', [
        'type' => 'News',
        'description' => __(
            'Next News'
        ),
        'resolve' => function (WPGraphQL\Model\Post $news, array $args, AppContext $context) {
            global $news;
            $news = get_post($news->ID);
            setup_postdata($news);
            $next = get_adjacent_post(false, '', false);
            wp_reset_postdata();
            if (!$next) {
                return null;
            }
            return DataSource::resolve_post_object($next->ID, $context);
        },
    ]);

}

function var_error_log( $object=null ){
    ob_start();                    // start buffer capture
    var_dump( $object );           // dump the values
    $contents = ob_get_contents(); // put the buffer into a variable
    ob_end_clean();                // end capture
    error_log( $contents );        // log contents of the result of var_dump( $object )
}



////////////////////////////////////////////////////////
/**
 * Register block styles.
 */
 
 add_action('acf/init', 'acf_init_block_types');
 function acf_init_block_types(){
	//register block type
	
	add_filter('wp_graphql_blocks_process_attributes', function($attributes, $data, $post_id){
		if($data['blockName'] == 'acf/newsfeatures'){
			$attributes['published'] = get_field('published', $post_id) ?? "";
			$attributes['author'] = get_field('author', $post_id) ?? "";
			$attributes['tags'] = get_field('tags', $post_id) ?? "";
		}
		return $attributes;
	}, 0, 3);

	//wp_enqueue_script('fontawesome', get_template_directory_uri() . "/template-parts/fontawesome/all.min.js");
	if(function_exists('register_block_type')){
		register_block_type(get_template_directory() . "/template-parts/blocks/ctaButton/block.json");
		register_block_type(get_template_directory() . "/template-parts/blocks/newsSearch/block.json");	
		register_block_type(get_template_directory() . "/template-parts/blocks/newsFeatures/block.json");
		//register_block_type(get_template_directory() . "/template-parts/blocks/newsDetails/block.json");
	/*	register_block_type(get_template_directory() . "/template-parts/blocks/propertySearch/block.json");
		register_block_type(get_template_directory() . "/template-parts/blocks/formspreeForm/block.json");
		register_block_type(get_template_directory() . "/template-parts/blocks/propertyFeatures/block.json");
		register_block_type(get_template_directory() . "/template-parts/blocks/tickItem/block.json");*/
	} ;
 }

 if(function_exists('acf_add_options_page')){
	 acf_add_options_page(array(
		'page_title' => 'Main menu',
		'menu_title' => 'Main menu',
		'show_in_graphql' => true,
		'icon_url' => 'dashicons-menu'
	));
 }
	 

if ( ! function_exists( 'twentytwentyfour_block_styles' ) ) :
	/**
	 * Register custom block styles
	 *
	 * @since Twenty Twenty-Four 1.0
	 * @return void
	 */
	function twentytwentyfour_block_styles() {

		register_block_style(
			'core/details',
			array(
				'name'         => 'arrow-icon-details',
				'label'        => __( 'Arrow icon', 'twentytwentyfour' ),
				/*
				 * Styles for the custom Arrow icon style of the Details block
				 */
				'inline_style' => '
				.is-style-arrow-icon-details {
					padding-top: var(--wp--preset--spacing--10);
					padding-bottom: var(--wp--preset--spacing--10);
				}

				.is-style-arrow-icon-details summary {
					list-style-type: "\2193\00a0\00a0\00a0";
				}

				.is-style-arrow-icon-details[open]>summary {
					list-style-type: "\2192\00a0\00a0\00a0";
				}',
			)
		);
		register_block_style(
			'core/post-terms',
			array(
				'name'         => 'pill',
				'label'        => __( 'Pill', 'twentytwentyfour' ),
				/*
				 * Styles variation for post terms
				 * https://github.com/WordPress/gutenberg/issues/24956
				 */
				'inline_style' => '
				.is-style-pill a,
				.is-style-pill span:not([class], [data-rich-text-placeholder]) {
					display: inline-block;
					background-color: var(--wp--preset--color--base-2);
					padding: 0.375rem 0.875rem;
					border-radius: var(--wp--preset--spacing--20);
				}

				.is-style-pill a:hover {
					background-color: var(--wp--preset--color--contrast-3);
				}',
			)
		);
		register_block_style(
			'core/list',
			array(
				'name'         => 'checkmark-list',
				'label'        => __( 'Checkmark', 'twentytwentyfour' ),
				/*
				 * Styles for the custom checkmark list block style
				 * https://github.com/WordPress/gutenberg/issues/51480
				 */
				'inline_style' => '
				ul.is-style-checkmark-list {
					list-style-type: "\2713";
				}

				ul.is-style-checkmark-list li {
					padding-inline-start: 1ch;
				}',
			)
		);
		register_block_style(
			'core/navigation-link',
			array(
				'name'         => 'arrow-link',
				'label'        => __( 'With arrow', 'twentytwentyfour' ),
				/*
				 * Styles for the custom arrow nav link block style
				 */
				'inline_style' => '
				.is-style-arrow-link .wp-block-navigation-item__label:after {
					content: "\2197";
					padding-inline-start: 0.25rem;
					vertical-align: middle;
					text-decoration: none;
					display: inline-block;
				}',
			)
		);
		register_block_style(
			'core/heading',
			array(
				'name'         => 'asterisk',
				'label'        => __( 'With asterisk', 'twentytwentyfour' ),
				'inline_style' => "
				.is-style-asterisk:before {
					content: '';
					width: 1.5rem;
					height: 3rem;
					background: var(--wp--preset--color--contrast-2, currentColor);
					clip-path: path('M11.93.684v8.039l5.633-5.633 1.216 1.23-5.66 5.66h8.04v1.737H13.2l5.701 5.701-1.23 1.23-5.742-5.742V21h-1.737v-8.094l-5.77 5.77-1.23-1.217 5.743-5.742H.842V9.98h8.162l-5.701-5.7 1.23-1.231 5.66 5.66V.684h1.737Z');
					display: block;
				}

				/* Hide the asterisk if the heading has no content, to avoid using empty headings to display the asterisk only, which is an A11Y issue */
				.is-style-asterisk:empty:before {
					content: none;
				}

				.is-style-asterisk:-moz-only-whitespace:before {
					content: none;
				}

				.is-style-asterisk.has-text-align-center:before {
					margin: 0 auto;
				}

				.is-style-asterisk.has-text-align-right:before {
					margin-left: auto;
				}

				.rtl .is-style-asterisk.has-text-align-left:before {
					margin-right: auto;
				}",
			)
		);
	}
endif;

add_action( 'init', 'twentytwentyfour_block_styles' );

/**
 * Enqueue block stylesheets.
 */

if ( ! function_exists( 'twentytwentyfour_block_stylesheets' ) ) :
	/**
	 * Enqueue custom block stylesheets
	 *
	 * @since Twenty Twenty-Four 1.0
	 * @return void
	 */
	function twentytwentyfour_block_stylesheets() {
		/**
		 * The wp_enqueue_block_style() function allows us to enqueue a stylesheet
		 * for a specific block. These will only get loaded when the block is rendered
		 * (both in the editor and on the front end), improving performance
		 * and reducing the amount of data requested by visitors.
		 *
		 * See https://make.wordpress.org/core/2021/12/15/using-multiple-stylesheets-per-block/ for more info.
		 */
		wp_enqueue_block_style(
			'core/button',
			array(
				'handle' => 'twentytwentyfour-button-style-outline',
				'src'    => get_parent_theme_file_uri( 'assets/css/button-outline.css' ),
				'ver'    => wp_get_theme( get_template() )->get( 'Version' ),
				'path'   => get_parent_theme_file_path( 'assets/css/button-outline.css' ),
			)
		);
	}
endif;

add_action( 'init', 'twentytwentyfour_block_stylesheets' );

/**
 * Register pattern categories.
 */

if ( ! function_exists( 'twentytwentyfour_pattern_categories' ) ) :
	/**
	 * Register pattern categories
	 *
	 * @since Twenty Twenty-Four 1.0
	 * @return void
	 */
	function twentytwentyfour_pattern_categories() {

		register_block_pattern_category(
			'twentytwentyfour_page',
			array(
				'label'       => _x( 'Pages', 'Block pattern category', 'twentytwentyfour' ),
				'description' => __( 'A collection of full page layouts.', 'twentytwentyfour' ),
			)
		);
	}
endif;

add_action( 'init', 'twentytwentyfour_pattern_categories' );
