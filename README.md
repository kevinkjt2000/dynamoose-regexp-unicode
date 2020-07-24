To reproduce the issue, run:
```
npm ci
docker run --rm -p 127.0.0.1:8000:8000 --name dynamodb -d amazon/dynamodb-local
npx babel-node main.js
```

To cleanup the docker:
```
dockerm rm -f dynamodb
```
