class FinancialLifeHacksController < ApplicationController
    def index

        render json: FinancialLifeHack.all

    end
end
