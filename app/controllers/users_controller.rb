class UsersController < ApplicationController

    def create 
        user = User.create(user_params)
        if user.valid? 
            render json: user, status: :created 
        else 
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update 
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :accepted 
    end

    def destroy
        user = User.find(params[:id]).destroy
        head :no_content
    end

    def show 
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end

end
