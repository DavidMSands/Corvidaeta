class AnalyticsController < ApplicationController

    def create_analytics
        proj = Project.find_by(generated_proj_id: params[:generated_proj_id])
        analytic = proj.analytics.create!(analytics_params)
        render json: analytic, status: :ok
    end

    def total_views
        user_analytics = find_user_analytics.map{ |a| {project_id: a.project_id, date: a.created_at.to_date - 1.day } }
        each = user_analytics.pluck(:date)
        t = each.tally.map{ |e| {name: e[0], count: e[1] }}
        render json: t
    end

    def pages_visted  
        user_analytics = find_user_analytics.map{ |a| { page: a.page_path, date: a.created_at.to_date - 1.day } }
        render json: user_analytics.pluck(:page).tally.map{ |e| {page: e[0], count: e[1] }}
    end

    def unique_views
        user_analytics = find_user_analytics .map{ |a| {date: a.created_at.to_date - 1.day, ip: a.user_ip } }
        each2 = user_analytics.pluck(:date).tally.map{ |e| {count: e[1] }}
        each = user_analytics.pluck(:date, :ip).map{ |a| {name: a[0], unique: "#{a[0]}" + "#{a[1]}" }}.uniq.pluck(:name).tally.map{ |e| { name: e[0], unique_count: e[1] }}
        merge = each.zip(each2).flat_map { |each, each2| {name: each.values[0], count: each2.values[0], unique: each.values[1]}}
        render json: merge
    end

    def countries 
        user_analytics = find_user_analytics.map{ |a| {date: a.created_at.to_date - 1.day, country: a.user_country_name } }
        render json: user_analytics.pluck(:country).tally.map{ |e| {country: e[0], count: e[1] }}
    end

    def device 
        user_analytics = find_user_analytics.map{ |a| { is_mobile: a.is_mobile, date: a.created_at.to_date - 1.day } }
        render json: user_analytics.pluck(:is_mobile).tally.map{ |e| {is_mobile: e[0].to_s, count: e[1] }}
    end

    def referral
        user_analytics = User.find(params[:id]).analytics.where("project_id = ? AND analytics.created_at >= ? AND analytics.created_at <= ? AND analytics.referral_site != 0", params[:project_id], params[:start_date], params[:end_date]).map{ |a| { referral: a.referral_site } }
        render json: user_analytics.pluck(:referral).tally.map{ |e| {referral: e[0].to_s, count: e[1] }}
    end
  
    private

    def find_user_analytics 
        User.find(params[:id]).analytics.where("project_id = ? AND analytics.created_at >= ? AND analytics.created_at <= ?", params[:project_id], params[:start_date], params[:end_date])
    end

    

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
