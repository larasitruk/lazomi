# Update dependencies
update:
    nix flake update

# Build the website
build:
    tailwindcss -i ./styles/input.css -o static/style.css --minify
    sukr

# Serve site
serve:
    miniserve --index index.html -q public --pretty-urls

# Watch (except gitignore) and rebuild
watch:
    watchexec just build

image__compress:
    #!/usr/bin/env bash
    mkdir -p static/images_optimized
    for file in static/originals-images/*.{jpg,JPG}; do
        # Extract the directory (e.g., "static/images")
        dir="${file%/*}"
        # Extract the filename (e.g., "photo.jpg")
        filename="${file##*/}"
        echo "Optimizing $file"
        # 1. 'convert' resizes the image to a max width of 1920px (maintaining aspect ratio)
        # 2. 'TGA:-' outputs a lossless uncompressed format to standard output
        # 3. '| cjpeg' receives it, compresses it, and saves it
        magick "$file" -resize 800x TGA:- | cjpeg -quality 80 > "static/images/$filename"
    done
