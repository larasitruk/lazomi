# Update dependencies
update:
    nix flake update

# Build the website
build:
    tailwindcss -i ./styles/input.css -o static/style.css --minify
    sukr

# Serve site
serve:
    miniserve --index index.html -q public

# Watch (except gitignore) and rebuild
watch:
    watchexec just build
