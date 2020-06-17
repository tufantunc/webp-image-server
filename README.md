# webp-image-server
A very basic image server with webp browser support checker

If request comes from a modern browser (with webp support)
server sends webp formatted file,
otherwise send jpg file.

Testing with sample url:
Go to image url with Chrome and Safari browser:
https://webp-image-server.herokuapp.com/images/884377.jpg

Check 'Content-Type' in request on network panel from browser's developer console.
