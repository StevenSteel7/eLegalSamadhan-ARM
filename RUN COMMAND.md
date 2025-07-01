When changes made in primsa schema:
 npx prisma migrate dev --name change_judgement_date_to_datetime




run command 
DATABASE_URL="file:$(pwd)/prisma/data/dev.db" \
RESEND_API_KEY="re_8Los7gDk_5vTrcDyu21vXAqo3VjZjyEa1" \
EMAIL_SENDER="no-reply@elegalsamadhan.com" \
CONTACT_FORM_RECIPIENT="elegalsamadhan@outlook.com" \
NEXT_PUBLIC_API_URL="http://localhost:3000/api" \
NEXTAUTH_SECRET="c3f72558539a9fc2f3296f7afc13f8689da4295caad4578228b7b42a6388f45f" \
NEXTAUTH_URL="http://localhost:3000" \
NODE_ENV="development" \
PORT="3000" \
npm run dev




docker build \
  --no-cache --build-arg  RESEND_API_KEY_BUILD='re_8Los7gDk_5vTrcDyu21vXAqo3VjZjyEa1' \
  -t stevensteel7/elegalsamadhan:vps-build .



docker run -d \
  -p 3000:3000 \
  --name elegalsamadhan-app \
  --restart unless-stopped \
  -v judgements_db_data:/app/prisma/data \
  -e DATABASE_URL="file:/app/prisma/data/dev.db" \
  -e DATABASE_URL_ALT="file:./dev.db" \
  -e RESEND_API_KEY='re_8Los7gDk_5vTrcDyu21vXAqo3VjZjyEa1' \
  -e EMAIL_SENDER='no-reply@elegalsamadhan.com' \
  -e CONTACT_FORM_RECIPIENT='elegalsamadhan@outlook.com' \
  -e NEXT_PUBLIC_API_URL='http://localhost:3000/api' \
  -e NEXTAUTH_SECRET='c3f72558539a9fc2f3296f7afc13f8689da4295caad4578228b7b42a6388f45f' \
  -e NEXTAUTH_URL='http://localhost:3000' \
  -e NODE_ENV=production \
  -e PORT=3000 \
  -e HOSTNAME='0.0.0.0' \
  stevensteel7/elegalsamadhan:vps-build





To enter
docker exec -it elegalsamadhan-app /bin/sh

to debug

docker logs elegalsamadhan-app




to remove latest docker container and image + remove docker volume:

docker stop $(docker ps -q --latest) && docker rm $(docker ps -a -q --latest) && docker rmi $(docker images -q --filter "dangling=false" | head -n 1)


remove docker volume:
docker volume rm judgements_db_data


To copy db from docker to current dir
docker cp elegalsamadhan-app:/app/prisma/data/dev.db .