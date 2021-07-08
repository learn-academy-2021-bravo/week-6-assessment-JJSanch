# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This inherits class ApplicationController into BlogPostsController
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # this method will access all items from the database.  This is an Active Record call that will save all the content from the db as an instance variable
    @posts = BlogPost.all
  end

  def show
    # ---3)
    # this looks for one item in the databse.  It is done by accessing the ID of the item
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # this will display a new form for the user
  def new
    @post = Post.new
  end

  def create
    # ---5)
    #This is a RESTful route that submits user data to the database
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  #This will allow a user to edit an already created blogpost
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #This will save an update for a specific blog post
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # This will allow for deletion of a specific blog post
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  #Private is used to list the strong params.  Restricts the scope of where a method can be called. Everything below the private keyword is included in its protection, so this is typically the last method inside the controller
  private
  def blog_post_params
    # ---10)
    #This indicates that this method will allow the parameters of title and content.  These parameters will be saved into the database as part of a blog post
    params.require(:blog_post).permit(:title, :content)
  end

end
