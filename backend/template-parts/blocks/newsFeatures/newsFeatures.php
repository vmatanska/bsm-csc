<?php
$published = get_field('published', $post_id);
$author = get_field('author', $post_id);    
$tags = get_field('tags', $post_id);
//echo "AUTHOR === ", print_r($author[0]['nickname']);
?>

<div style="max-width: 500px; margin: 10px auto; color: black; background: orange; padding: 10px;">
    <p>
        <?php echo $published; ?> - by <?php echo $author[0]['nickname']; ?>
    </p>
    <p><?php echo $tags; ?></p>
</div>