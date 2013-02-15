# Require any additional compass plugins here.

# Moodle overrides

# This command will find ALL the 'styles.scss' files in moodle and write them to a _require.scss file
# This will ensure that all moodle plugins can be written with SASS
# Also disabled since 'watch' does not seem to pick up these files and compile them
# automatically.  Keeping here only for reference
# system 'find . -name "_styles.scss" | sed -e "s/.*/@import \"\.\.\/\.\.\/\.&\"\;/g" > ./theme/base/sass/_styles.scss'


# This file should live in project root
# Set this to the root of your project when deployed:
http_path = "/"

# CSS dir: this is where the SASS files are compiled to CSS
#   Only a single file should be created: theme.css
#   this file is then loaded via standard moodle theme method
css_dir = "theme/base/style"

# SASS dir: this is where the source files are kept.
#   Only one file should be compiled directly: theme.scss
#   this file is responsible for including all dependencies
sass_dir = "theme/base/sass"


images_dir = "theme/base/pix"
javascripts_dir = "theme/base/javascript"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
# This defaults to development expanded CSS (which is human readable)
# To force production compressed CSS for deployment, use command:
#       compass compile -e production --force
output_style = (environment == :production) ? :compressed : :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
