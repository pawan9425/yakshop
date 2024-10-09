#Testing the API

You can use Postman to test the endpoints:

- **GET /yak-shop/stock/:T** (replace `T` with the number of days)
- **GET /yak-shop/herd/:T** (replace `T` with the number of days)

curl requests :

1. curl --location 'http://localhost:3000/yak-shop/stock/13' \
   --header 'Content-Type: application/json'

2. curl --location 'http://localhost:3000/yak-shop/herd/13' \
   --header 'Content-Type: application/json'
