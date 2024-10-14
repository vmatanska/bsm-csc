<?php

$published = get_field('published', $post_id);
$author = get_field('author', $post_id);

?>
<div style="max-width: 500px; margin: 10px auto; color: black; background: orange; padding: 10px;>
    <p>
        <?php echo $published; ?> - by <?php echo $author; ?>
    </p>
    <p>Previous_post_link<?php previous_post_link(); ?> --- <?php next_post_link(); ?></p>
</div>