. ./.env
docker run -it \
	--rm -p ${IP}:80:80 \
	-v "$(pwd)"/html:/usr/local/apache2/htdocs \
	--name htmlmodules \
	httpd bash
