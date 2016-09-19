<?php get_header(); ?>

<?php if(have_posts()): while (have_posts()) : the_post(); ?>

      <h1><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h1>

<?php endwhile; else: ?>
  <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
<?php endif; ?>

<?php get_footer(); ?>
