class SessionsController < ApplicationController

    def show 
        user = User.find(session[:user_id])
        if user 
            render json: user, status: :ok
        else 
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create 
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: :created 
        elsif user
            render json: { error: "Invalid password" }, status: :unauthorized
        else 
            render json: { error: "Invalid email" }, status: :unauthorized
        end
    end

    def destroy 
        session.delete :user_id 
        head :no_content
    end

end
