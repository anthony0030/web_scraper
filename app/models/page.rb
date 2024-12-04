class Page < ApplicationRecord
  has_many :results

  validates :url, presence: true
  validates :check_type, presence: true
  validates :selector, presence: true
  validates :match_text, presence: { if: -> { check_type == 'text' } }

  def last_result
    self.results.last
  end

  def run_and_notify
    run_check
    last_result.notify
  end

  def run_check
    scraper = Scraper.new(url)

    result = case check_type
    when 'text'
      scraper.text(selector: selector).downcase == match_text.downcase
    when 'presence'
      scraper.present?(selector:)
    when 'absence'
      !scraper.present?(selector:)
    end

    results.create(success: result)
  end
end
