class UsersController < ApplicationController
    
    def show 
        user = User.find(params[:id])
        if user 
            render json: user, status: :ok, serializer: UserShowSerializer, include: ['projects.comments', 'posts.comments', 'comments', 'followees', 'followers']
        else 
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create 
        user = User.create(user_params)
        if user.valid? 
            render json: user, status: :created 
        else 
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    

    private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end

end
