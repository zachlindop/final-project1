class WorkStudyLifeHackReviewsController < ApplicationController

    def index

        render json: WorkStudyLifeHackReview.all

    end

end
