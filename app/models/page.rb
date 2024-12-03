class Page < ApplicationRecord
  has_many :results

  validates :url, presence: true
  validates :check_type, presence: true
  validates :selector, presence: true
  validates :match_text, presence: { if: -> { check_type == 'text' } }

  def run_check!
    scraper = Scraper.new(url)

    result = case check_type
    when 'text'
      scraper.text(selector:).downcase == match_text.downcase
    when 'presence'
      scraper.present?(selector:)
    when 'absence'
      !scraper.present?(selector:)
    end

    results.create(success: result)
  end
end
