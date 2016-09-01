require 'rubygems'
require 'sinatra/base'
require 'sass'
require 'slim'

class SassEngine < Sinatra::Base
  set :views,   File.dirname(__FILE__)    + '/assets/sass'

  get '/stylesheets/*.css' do
    filename = params[:splat].first
    sass filename.to_sym
  end
end

class CoffeeEngine < Sinatra::Base
  set :views,   File.dirname(__FILE__)    + '/assets/coffeescript'

  get "/javascripts/*.js" do
    filename = params[:splat].first
    coffee filename.to_sym
  end
end

class Portfolio < Sinatra::Base
  use SassEngine

  set :bind, '0.0.0.0'
  set :views,   File.dirname(__FILE__) + '/views'
  set :public_dir,  File.dirname(__FILE__) + '/public'

  get '/' do
    @page = "homepage"
    slim :home
  end

  get '/projects' do
    @page = "websites"
    slim :websites
  end

  get '/artwork' do
    @page = "art"
    slim :art
  end

  get '/about' do
    @page = "about"
    slim :about
  end
end

Portfolio.run!
