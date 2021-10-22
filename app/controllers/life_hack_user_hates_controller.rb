class LifeHackUserHatesController < ApplicationController
  # POST /life_hack_user_hates
  def create
    @life_hack_user_hate = LifeHackUserHate
                            .find_or_create_by(life_hack_id: life_hack_user_hate_params[:life_hack_id], user_id: life_hack_user_hate_params[:user_id])

    if @life_hack_user_hate.update!(count: @life_hack_user_hate.count + 1)
      render json: @life_hack_user_hate, status: :created
    else
      render json: @life_hack_user_hate.errors, status: :unprocessable_entity
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def life_hack_user_hate_params
      params.require(:life_hack_user_hate).permit(:life_hack_id, :user_id)
    end
end
