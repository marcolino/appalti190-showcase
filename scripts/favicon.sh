#!/bin/bash

# Favicon and Apple Touch Icon Generator
#
# This bash script takes an image as a parameter, and uses ImageMagick to convert it to several
# other formats used on modern websites. The following copies are generated:
# 
#  - apple-touch-icon-144x144-precomposed.png
#  - apple-touch-icon-114x114-precomposed.png
#  - apple-touch-icon-57x57-precomposed.png
#  - apple-touch-icon-72x72-precomposed.png
#  - apple-touch-icon-precomposed.png
#  - apple-touch-icon.png
#  - favicon-192x192.png
#  - favicon.ico
#
# index.html should contain at least:
#
#   <link rel="shortcut icon" type="image/png" href="%PUBLIC_URL%/favicon-192x192.png">
#   <link rel="shortcut icon" sizes="192x192" href="%PUBLIC_URL%/favicon-192x192.png">
#   <link rel="apple-touch-icon" href="%PUBLIC_URL%/apple-touch-icon.png">
#
# manifest.json file should contain at least:
#   "icons": [
#     {
#       "src": "favicon-64x64.png",
#       "type": "image/png",
#       "sizes": "64x64",
#       "purpose": "any"
#     },
#     {
#       "src": "favicon-144x144.png",
#       "type": "image/png",
#       "sizes": "144x144",
#       "purpose": "any"
#     }
#   ],
#
# Concept from http://bergamini.org/computers/creating-favicon.ico-icon-files-with-imagemagick-convert.html

CONVERT_CMD=`which convert`
SRC_IMAGE="$1"
PWD=`pwd`

if [ -z $CONVERT_CMD ] || [ ! -f $CONVERT_CMD ] || [ ! -x $CONVERT_CMD ];
then
    echo "ImageMagick needs to be installed to run this script"
    exit;
fi

if [ -z $SRC_IMAGE ];
then
	echo "You must supply a source image as the argument to this command."
	exit;
fi

if [ ! -f $SRC_IMAGE ];
then
    echo "Source image \"$SRC_IMAGE\" does not exist."
    exit;
fi

echo "Generating square base image"
$CONVERT_CMD $SRC_IMAGE -resize 256x256! -transparent white $PWD/favicon-256.png

echo "Generating various sizes for ico"
$CONVERT_CMD $PWD/favicon-256.png -resize 16x16 $PWD/favicon-16x16.png
$CONVERT_CMD $PWD/favicon-256.png -resize 32x32 $PWD/favicon-32x32.png
$CONVERT_CMD $PWD/favicon-256.png -resize 64x64 $PWD/favicon-64x64.png
$CONVERT_CMD $PWD/favicon-256.png -resize 128x128 $PWD/favicon-128x128.png
$CONVERT_CMD $PWD/favicon-256.png -resize 144x144 $PWD/favicon-144x144.png
$CONVERT_CMD $PWD/favicon-256.png -resize 192x192 $PWD/favicon-192x192.png

echo "Generating ico"
$CONVERT_CMD $PWD/favicon-16x16.png $PWD/favicon-32x32.png $PWD/favicon-64x64.png $PWD/favicon-128x128.png $PWD/favicon-192x192.png -colors 256 $PWD/favicon-192x192.ico
#$CONVERT_CMD $PWD/favicon-192.png -colors 256 $PWD/favicon-192x192.ico

echo "Generating touch icons"
$CONVERT_CMD $PWD/favicon-256.png -resize 57x57 $PWD/apple-touch-icon.png
cp $PWD/apple-touch-icon.png $PWD/apple-touch-icon-precomposed.png
#cp $PWD/apple-touch-icon.png $PWD/apple-touch-icon-57x57-precomposed.png
#$CONVERT_CMD $PWD/favicon-256.png -resize 72x72 $PWD/apple-touch-icon-72x72-precomposed.png
#$CONVERT_CMD $PWD/favicon-256.png -resize 114x114 $PWD/apple-touch-icon-114x114-precomposed.png
#$CONVERT_CMD $PWD/favicon-256.png -resize 144x144 $PWD/apple-touch-icon-144x144-precomposed.png

echo "Removing temp files"
rm -rf $PWD/favicon-16x16.png
rm -rf $PWD/favicon-32x32.png
#rm -rf $PWD/favicon-64x64.png
rm -rf $PWD/favicon-128x128.png
#rm -rf $PWD/favicon-144x144.png
rm -rf $PWD/favicon-256.png
