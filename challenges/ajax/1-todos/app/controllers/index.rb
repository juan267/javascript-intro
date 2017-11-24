get '/' do
  erb :index
end

post '/add_todo' do
  p "Dentro de la ruta  /add_todo!"
end
