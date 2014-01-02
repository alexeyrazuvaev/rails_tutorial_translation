class ChaptersController < ApplicationController

  before_filter :heroku_cache

  def show
    chapter = params[:id]
    version = params[:version]
    @content = File.open("public/book#{version}/#{chapter}_fragment.html").read
    css_classes
  end

  def show_4_0
    chapter = params[:id]
    @content = File.open("public/book/4_0/#{chapter}_fragment.html").read
    css_classes
  end

  private
    def css_classes
      @body_class = 'book'
      @main_class = 'withsidebar'
    end
end
