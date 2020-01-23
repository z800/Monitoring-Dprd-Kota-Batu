# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
Rails.application.config.assets.precompile += %w(
  theme-night-admin.css
  jquery/jquery-ui.min.css
  fontawesome/font-awesome.min.css
  codemirror/codemirror.css
  nvd3/nv.d3.css
  mcustomscrollbar/jquery.mCustomScrollbar.css
  fullcalendar/fullcalendar.css
  blueimp/blueimp-gallery.min.css
  rickshaw/rickshaw.css
  dropzone/dropzone.css
  introjs/introjs.min.css
  animate/animate.min.css
)
# cust.js
# jQAllRangeSliders-min.js ion.rangeSlider.css
# jquery.min.js jquery-ui.min.js
