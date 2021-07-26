import os
from dotenv import load_dotenv
from hubspot import HubSpot
from flask import Flask

# please, set FLASK_APP in your .env file
app = Flask(__name__)

# use home path
@app.route("/")
def get_contacts():
  api_client = HubSpot()    # get hubspot client
  api_client.access_token = access_token()    # set your private app access token
  contacts = api_client.crm.contacts.basic_api.get_page()    # get your contacts
  return str(contacts)   # return your contacts as json

# get access_token from .env file
def access_token():
  load_dotenv()
  return os.environ['ACCESS_TOKEN']
