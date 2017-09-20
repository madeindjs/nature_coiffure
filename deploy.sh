#!/bin/bash
ssh pi 'rm -r /var/www/nature_coiffure_martine/*'
bundle exec jekyll build && scp -r _site/* pi:/var/www/nature_coiffure_martine 
