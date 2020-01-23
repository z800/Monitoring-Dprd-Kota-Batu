class PagesController < ApplicationController

  include Mikrotik

  def index

  end

  def load

    et = params[:ether]

    if et
      eth = et
    else
      eth = 'bridge'
    end

    @scrap = current_load(eth)
    @info = info( @scrap )

    render json: @info

  end

end
