class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :ensure_domain


  private

    # Use the Heroku Varnish cache.
    def heroku_cache
      if Rails.env.production?
        age = 1.day.to_i
        response.headers['Cache-Control'] = "public, max-age=#{age}"
      end
    end


    APP_DOMAIN = 'railstutorial.ru'

    def ensure_domain
      if request.env['HTTP_HOST'] != APP_DOMAIN && ENV["RAILS_ENV"] != 'development'
        # HTTP 301 is a "permanent" redirect
        redirect_to "http://#{APP_DOMAIN}", :status => 301
      end
    end
end
