require 'openssl'
require 'open-uri'

module Mikrotik

  URL = "https://dprdtraffic.brvfx.com/?iface="

  def current_load(val)
    url = URL
    request = HTTParty.get(url + val)
  end

  def info(val)
    response = JSON.parse(val.body)
  end

end
