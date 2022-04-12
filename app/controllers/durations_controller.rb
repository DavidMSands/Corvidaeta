class DurationsController < ApplicationController

    def create_durations
        proj = Project.find_by(generated_proj_id: params[:generated_proj_id])
        duration = proj.durations.create!(durations_params)
        render json: durations, status: :ok
    end

    def time 
        user = User.find(params[:id]).durations.where("project_id = ? AND durations.created_at >= ? AND durations.created_at <= ?", params[:project_id], params[:start_date], params[:end_date])
        duration = { avg: user.avg_columns, total: user.sum_columns }
        render json: duration
    end

    private

    def durations_params
        params.permit(:elapsed, :project_id)
    end

end
