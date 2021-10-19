class LifeHacksController < ApplicationController

    def index
        render json: LifeHack.all
    end
    # , each_serializer: :LifeHackIndexSerializer

    def create
        new_hack = LifeHack.new(life_hack_params)

        if new_hack.save
            render json: new_hack, status: :ok
        else            
            render json:
             { errors: new_hack.errors.full_messages }, status: :unprocessable_entity
        end
    end    

    private
    def life_hack_params
        params.require(:life_hack).permit(:title, :kind, :image, :description)
    end
end
