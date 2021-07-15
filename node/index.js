const hubspot = require('@hubspot/api-client');
require('dotenv').config();
const express = require('express');
const opn = require('open');

//===========================================================================//
//  HUBSPOT APP CONFIGURATION
//
//  ACCESS_TOKEN value must match configuration settings in your private app.
//  It will be used to configure HubSpot API Client for signing requests to HubSpot API endpoints
//  If ACCESS_TOKEN doesn't match your private app configuration, users will
//  see an error page.

// Set Private App ACCESS_TOKEN as environment variables before running.
if (!process.env.ACCESS_TOKEN) {
  throw new Error('Missing ACCESS_TOKEN environment variable.')
}
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

//=============================================================================//
//   Using Private App Access Token to configure HubSpot API Client instance   //
//=============================================================================//
const hubspotClient = new hubspot.Client({ accessToken: ACCESS_TOKEN });

//==================================================//
//   Using an API Client to Query the HubSpot API   //
//==================================================//

const getContact = async () => {
  console.log('');
  console.log('=== Retrieving a contact from HubSpot using API Client ===');
  try {
    console.log('===> Replace the following hubspotClient.crm.contacts.basicApi.getPage(1) SDK call to test other API endpoints');
    console.log('===> hubspotClient.crm.contacts.basicApi.getPage(1)');
    const result = await hubspotClient.crm.contacts.basicApi.getPage(1);
    return result.body.results[0];
  } catch (e) {
    console.error('  > Unable to retrieve contact');
    return e.response.body;
  }
};

//========================================//
//   Displaying information to the user   //
//========================================//

const displayContactName = (res, contact) => {
  if (contact.status === 'error') {
    res.write(`<p>Unable to retrieve contact! Error Message: ${contact.message}</p>`);
    return;
  }
  const { firstname, lastname } = contact.properties;
  res.write(`<p>Contact name: ${firstname} ${lastname}</p>`);
};

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write(`<h2>HubSpot Private App Starter</h2>`);
  const contact = await getContact();
  displayContactName(res, contact);
  res.end();
});

app.listen(PORT, () => console.log(`=== Starting your app on http://localhost:${PORT} ===`));
opn(`http://localhost:${PORT}`);
