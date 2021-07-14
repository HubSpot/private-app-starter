const hubspot = require('@hubspot/api-client');
require('dotenv').config();
const express = require('express');
const opn = require('open');

const app = express();
const PORT = 3000;

if (!process.env.ACCESS_TOKEN) {
  throw new Error('Missing ACCESS_TOKEN environment variable.')
}

//===========================================================================//
//  HUBSPOT APP CONFIGURATION
//
//  All the following values must match configuration settings in your app.
//  They will be used to build the OAuth URL, which users visit to begin
//  installing. If they don't match your app's configuration, users will
//  see an error page.

// Replace the following with the values from your app auth config,
// or set them as environment variables before running.
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const hubspotClient = new hubspot.Client({ accessToken: ACCESS_TOKEN });

//====================================================//
//   Using an Access Token to Query the HubSpot API   //
//====================================================//

const getContact = async () => {
  console.log('');
  console.log('=== Retrieving a contact from HubSpot using API Client ===');
  try {
    console.log('===> Replace the following hubspotClient.crm.contacts.basicApi.getPage(1) to test other API calls');
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

app.get('/', async (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write(`<h2>HubSpot Private App Starter</h2>`);
  const contact = await getContact();
  displayContactName(res, contact);
  res.end();
});

app.listen(PORT, () => console.log(`=== Starting your app on http://localhost:${PORT} ===`));
opn(`http://localhost:${PORT}`);
