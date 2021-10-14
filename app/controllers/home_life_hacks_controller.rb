class HomeLifeHacksController < ApplicationController
    def index

        render json: HomeLifeHack.all

    end
end
