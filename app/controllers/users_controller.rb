class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def show
        current_user = User.find_by(id: params[:id])
        if current_user
            render json: current_user
        else
            render json:{error: "User not found"}, status: :not_found
        end
    end

    def create
        # newUser = User.create(user_params)
        newUser = User.new(user_new_params)

        if newUser.save
            render json: newUser
        else
            render json: {errors: newUser.errors.full_messages }
        end
    
        
    end

    def update
        edited_user = User.find_by_id( params[:id])

        if edited_user.update(user_edit_params)
            render json: edited_user
        else
            render json: {errors: edited_user.errors.full_messages}
        end
    
    end

    def destroy
        user_delete_account = User.find_by_id(params[:id])
        session.delete(:user_id)
        user_delete_account.destroy
        render json: {session_user: session[:user_id]}
    end

    private

    def user_new_params
        params.permit(:username, :password, :image, :about)
    end

    def user_edit_params
        params.permit(:username)
    end

end
