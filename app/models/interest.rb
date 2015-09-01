class Interest < ActiveRecord::Base

  belongs_to :interestable, polymorphic: true, dependent: :destroy

  belongs_to :user, dependent: :destroy

  belongs_to :company, dependent: :destroy

end