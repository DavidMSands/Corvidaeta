class ProjectsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :project_not_found

    def create 
        project = Project.create!(project_params)
        render json: project, status: :ok
    end

    def my_projects 
        user = User.find(params[:id])
        render json: user.projects.all
    end

    private 

    def project_not_found
        render json: { error: "Project not found" }, status: :not_found
    end

    def project_params 
        params.permit(:project_name, :url, :description, :generated_proj_id, :user_id)
    end

end
