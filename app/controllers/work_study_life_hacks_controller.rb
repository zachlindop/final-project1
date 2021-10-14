class WorkStudyLifeHacksController < ApplicationController

    def index

        render json: WorkStudyLifeHack.all

    end

end
