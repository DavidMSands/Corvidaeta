class AnalyticsController < ApplicationController

    def create_analytics
        proj = Project.find_by(generated_proj_id: params[:generated_proj_id])
        analytic = proj.analytics.create!(analytics_params)
        render json: analytic, status: :ok
    end

    private

    def analytics_params
        params.permit(
            :referral_site,
            :event_id,
            :event_type,
            :page_path,
            :user_ip,
            :user_city,
            :user_country_code,
            :user_country_name,
            :user_timezone,
            :user_languages,
            :user_os,
            :is_mobile,
            :click_text,
            :click_id,
            :click_class,
            :event_time,
            :unique_key,
            :project_id
        )
    end

end
