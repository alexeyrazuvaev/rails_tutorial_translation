class ChaptersController < ApplicationController

  before_filter :heroku_cache

  def show
    chapter = params[:id]
    version = params[:version]
    @content = File.open("public/book#{version}/#{chapter}_fragment.html").read
  end
end
