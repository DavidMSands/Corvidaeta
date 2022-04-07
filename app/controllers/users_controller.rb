class UsersController < ApplicationController
    
    def show # should we keep both?
        user = User.find(params[:id])
        if user 
            render json: user, status: :ok, serializer: UserShowSerializer, include: ['projects.comments', 'posts.comments', 'comments', 'followees', 'followers']
        else 
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

end
