class DrillsController < ApplicationController
    def index
        if params[:user_id]
            render json: Drill.all.where(user_id: params[:user_id])
        else 
            render json: Drill.all
        end 
    end 

    def show
        render json: Drill.find(params[:id])
    end 
    
end
