# private-app-starter

This is a sample app for demonstrating the HubSpot API [client libraries](https://developers.hubspot.com/docs/api/overview). 

## How to run locally

1. Copy the .env.template file into a file named .env in the folder of the language you want to use. For example:

```bash
cp node/.env.template node/.env
```

2. Paste your Private App Access Token as the value for ACCESS_TOKEN in .env 

3. Follow the language instructions on how to run. For example, if you want to run the Node server:

```
cd node # there's a README in this folder with instructions
npm install
npm start
```

## Supported languages

* [JavaScript (Node)](node/README.md)
* [Python](python/README.md)
* [Php](php/README.md)
* [Ruby](ruby/README.md)
