class LifeHacksController < ApplicationController

    def index
        render json: LifeHack.all
    end

end
