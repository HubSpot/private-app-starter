require_relative 'config'
require 'sinatra'

# using home path
get '/' do
  # converting recieved contacts to json
  get_contacts.to_json
end

def get_contacts
  # getting Hubspot contacts api client
  api = Hubspot::Crm::Contacts::BasicApi.new
  
  # getting the first contacts page
  api.get_page(auth_names: 'oauth2')
end
