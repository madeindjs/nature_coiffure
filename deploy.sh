#!/bin/bash -eux
npm run build
ssh vps-1bf61d44 'rm -r /var/www/nature/*'
scp -r _site/* vps-1bf61d44:/var/www/nature
