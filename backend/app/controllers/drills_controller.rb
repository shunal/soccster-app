class DrillsController < ApplicationController
    def index
        if params[:user_id]
            render json: Drill.all.where(user_id: params[:user_id])
        else 
            render json: Drill.all
        end 
    end

    def new
        @drill = Drill.new
    end 

    def create 
        @drill = Drill.create(drill_params)
        @tag = Tag.find_or_create_by(name: params[:tags])
        @drill.tags << @tag
    end 

    def show
        render json: Drill.find(params[:id])
    end 

    private

    def drill_params
            params.require(:drill).permit(:title, :description, :drawing)
    end 
    
end
