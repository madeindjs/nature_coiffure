#!/bin/bash
ssh pi 'rm -r /var/www/nature_coiffure/*'
bundle exec jekyll build && scp -r _site/* pi:/var/www/nature_coiffure 
