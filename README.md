# private-app-starter

This is a sample app for the HubSpot API [client libraries](https://developers.hubspot.com/docs/api/overview). 
This sample app demonstrates how to make an API call to the Contacts API.

## Reference

- [Contacts API](https://developers.hubspot.com/docs/api/crm/contacts)

## How to run locally

1. The first steps is to [create a HubSpot developer account](https://developers.hubspot.com/docs/api/developer-tools-overview). This is where you will create and manage HubSpot apps. 
2. Next [create an app](https://developers.hubspot.com/docs/api/creating-an-app). On the "App info" tab, You will be prompted to fill out some basic information about your app. This includes name, description, logo, etc.  

3. Lastly, in the "Auth" tab, you will be provided with a Client ID & Client secret (used in the next step). To ensure your app is compatible with this sample app, set the "Redirect URL" ("http://localhost:3000/oauth-callback" for Node), and select "Contacts" from the "Scopes" list.

4. Copy the .env.template file into a file named .env in the folder of the language you want to use. For example:

```bash
cp node/.env.template node/.env
```

5. Paste your HubSpot Client Id and HubSpot Client Secret as the value for HUBSPOT_CLIENT_ID and HUBSPOT_CLIENT_SECRET in .env 

6. Follow the language instructions on how to run. For example, if you want to run the Node server:

```
cd node # there's a README in this folder with instructions
npm install
npm run dev
```

## Supported languages

* [JavaScript (Node)](node/README.md)
