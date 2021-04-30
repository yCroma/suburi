#!/bin/bash

docker-compose up -d --rm --build webpack
docker-compose exec webpack npm init -y
docker-compose exec webpack npm install -g \
	webpack \
	webpack-cli \
	html-loader \
	html-webpack-plugin
docker-compose exec webpack bash
