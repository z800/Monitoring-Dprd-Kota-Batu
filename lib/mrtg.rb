require 'openssl'
require 'open-uri'

module Mrtg

  URL = "http://202.164.218.74/graphs/iface/ether"

  def scrape_page(url)
    scrape = Nokogiri::HTML(HTTParty.get(url))
  end

  def get_data(ether)

    url       = "#{URL}#{ether}"
    entries   = scrape_page( url )
    # entries   = self.send(monitoring, fetch) if self.respond_to?(monitoring, fetch)

  end

  def daily(data)
    doc       = data
    entries   = doc.css('.box')[0]
    daily     = entries.css('p')[0]
  end

  def weekly(data)
    doc       = data
    entries   = doc.css('.box')[1]
    daily     = entries.css('p')[0]
  end

  def monthly(data)
    doc       = data
    entries   = doc.css('.box')[2]
    monthly   = entries.css('p')[0]
  end

  def yearly(data)
    doc       = data
    entries   = doc.css('.box')[3]
    yearly    = entries.css('p')[0]
  end

end
