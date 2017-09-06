#!/bin/bash
jekyll build && scp -r _site/* pi:/var/www/nature_coiffure 