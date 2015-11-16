require 'sinatra/base'
require 'sinatra/flash'
require './lib/hangperson_game.rb'

catch (:ArgumentEror) do

class HangpersonApp < Sinatra::Base

  enable :sessions
  register Sinatra::Flash
  
  before do
    @game = session[:game] || HangpersonGame.new('')
  end
  
  after do
    session[:game] = @game
  end
  
  # These two routes are good examples of Sinatra syntax
  # to help you with the rest of the assignment
  get '/' do
    redirect '/new'
  end
  
  post '/new' do
    redirect '/new'
  end

  get '/new' do
    redirect '/create'
#    erb :new
  end
  


  get '/create' do
    # NOTE: don't change next line - it's needed by autograder!
    word = params[:word] || HangpersonGame.get_random_word
    # NOTE: don't change previous line - it's needed by autograder!

    @game = HangpersonGame.new(word)
    redirect '/show'
  end
  
  # Use existing methods in HangpersonGame to process a guess.
  # If a guess is repeated, set flash[:message] to "You have already used that letter."
  # If a guesse is invalid, set flash[:message] to "Invalid guess."
  post '/guess' do
    redirect '/guess'
  end

get '/guess' do

    letter = params[:guess].to_s[0]
    ### YOUR CODE HERE ###
    if (letter == '')
        redirect '/show'
      end
    if (letter == nil)
        redirect '/show'
      end

    if false == @game.guess(letter)
      flash[:message] = "Invalid guess"
    end
    wol = @game.check_win_or_lose
     if (wol == :win)
       redirect '/win'
     elsif wol == :lose
       redirect '/lose'
     else
       redirect '/show'
     endnnn
    
  end
  
  # Everytime a guess is made, we should eventually end up at this route.
  # Use existing methods in HangpersonGame to check if player has
  # won, lost, or neither, and take the appropriate action.
  # Notice that the show.erb template expects to use the instance variables

  post '/show' do
    redirect '/show'
    end

  get '/show' do
    ### YOUR CODE HERE ###
    erb :show

    # wol = @game.check_win_or_lose
    # if (wol == :win)
    #   redirect '/win'
    # elsif wol == :lose
    #   redirect '/lose'
    # else
    #   redirect '/show'
    # end
#    erb :show # You may change/remove this line
  end
  
post '/win' do
   redirect '/create'
    #redirect '/win'
end

  get '/win' do
    ### YOUR CODE HERE ###
    erb :win
#   redirect '/new'
#    erb :win # You may change/remove this line
  end
  
  post '/lose' do
#    erb :new
    redirect '/create'
  end

  get '/lose' do
    ### YOUR CODE HERE ###
    erb :lose
    #redirect '/new'
 #   erb :lose # You may change/remove this line
  end
  
end

end #catch
