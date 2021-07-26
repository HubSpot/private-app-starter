# Load the gem
require 'hubspot-api-client'
require 'dotenv'

Dotenv.load

# Setup authorization
Hubspot.configure do |config|
  # Configure your Private App access token
  config.access_token = ENV['ACCESS_TOKEN']
end
