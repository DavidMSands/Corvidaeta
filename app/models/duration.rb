class Duration < ApplicationRecord
    belongs_to :project

    def self.avg_columns
        self.average(:elapsed)
    end

    def self.sum_columns
        self.sum(:elapsed)
    end
end
