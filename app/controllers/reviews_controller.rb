class ReviewsController < ApplicationController

    def index
        render json: Review.all
    end

    def create
        review = Review.new(review_params)

        if review.save
            render json: review, status: :ok
        else
            
            render json:
             { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    def review_params
        params.require(:review).permit(:review, :user_id, :life_hack_id)
    end
end
