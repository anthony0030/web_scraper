require 'net/http'

class Scraper
  attr_reader :document

  def initialize(url)
    responce = Net::HTTP.get(URI(url))
    @document = Nokogiri::HTML(responce)
  end

  def text(selector:)
    document.at_css(selector)
  end

  def present?(selector:)
    document.at_css(selector).present?
  end
end
