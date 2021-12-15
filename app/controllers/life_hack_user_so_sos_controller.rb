class LifeHackUserSoSosController < ApplicationController
  # POST /life_hack_user_so_sos
  def create
    @life_hack_user_so_so = LifeHackUserSoSo
                            .find_or_create_by(life_hack_id: life_hack_user_so_so_params[:life_hack_id], user_id: life_hack_user_so_so_params[:user_id])

    if @life_hack_user_so_so.update!(count: @life_hack_user_so_so.count + 1)
      render json: @life_hack_user_so_so, status: :created
    else
      render json: @life_hack_user_so_so.errors, status: :unprocessable_entity
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def life_hack_user_so_so_params
      params.require(:life_hack_user_so_so).permit(:life_hack_id, :user_id)
    end
end
