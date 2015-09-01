class Interest < ActiveRecord::Base

  belongs_to :interestable, polymorphic: true

end