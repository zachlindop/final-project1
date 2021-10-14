class FinancialLifeHackReviewsController < ApplicationController
    def index
        render json: FinancialLifeHackReview.all
    end
end
