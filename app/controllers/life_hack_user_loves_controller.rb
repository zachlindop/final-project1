class LifeHackUserLovesController < ApplicationController
  # POST /life_hack_user_loves
  def create
    @life_hack_user_love = LifeHackUserLove
                            .find_or_create_by(life_hack_id: life_hack_user_love_params[:life_hack_id], user_id: life_hack_user_love_params[:user_id])

    if @life_hack_user_love.update!(count: @life_hack_user_love.count + 1)
      render json: @life_hack_user_love, status: :created, location: @life_hack_user_love
    else
      render json: @life_hack_user_love.errors, status: :unprocessable_entity
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def life_hack_user_love_params
      params.require(:life_hack_user_love).permit(:life_hack_id, :user_id)
    end
end
