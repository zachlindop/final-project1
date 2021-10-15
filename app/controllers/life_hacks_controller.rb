class LifeHacksController < ApplicationController

    def index
        render json: LifeHack.all
    end

    # def create
    #     new_hack = LifeHack.new(plug_params)
    #     if hew_hack.save
    #         render json: new_hack
    #     else
    #         render json: {new_hack.errors.full_messages}
    #     end
    # end    

end
