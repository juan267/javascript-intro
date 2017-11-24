get '/' do
  redirect '/posts'
end

get '/posts' do
  @posts = Post.includes(:votes).all
  erb :index
end

get '/posts/:id/vote' do
  post = Post.find(params[:id])
  post.votes.create(value: 1)
  redirect '/posts'

  # Ajaxificado
  # content_type :json
  # {votes_count: post.votes.count, id: post.id}.to_json
end

delete '/posts/:id' do
  # Implementar la logica de esta ruta.
end

post '/posts' do
  @post = Post.new(title: params["title"],
               username: Faker::Internet.user_name,
               comment_count: rand(1000))
  if @post.save
    redirect '/posts'

    # Con partials
    # status 201
    # erb :"_post", layout: false, locals: {post: @post}


    # Con JSON
    # content_type :json
    # {post: @post}.to_json
  else
    status 400
    @error = post.errors.full_messages
    erb :index
  end
end


get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
