class HomeLifeHackReviewsController < ApplicationController

    def index

        render json: HomeLifeHackReview.all

    end

end
