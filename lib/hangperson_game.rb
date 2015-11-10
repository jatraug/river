class HangpersonGame

  # add the necessary class methods, attributes, etc. here
  # to make the tests in spec/hangperson_game_spec.rb pass.

  # Get a word from remote "random word" service

  # def initialize()
  # end
  
  def initialize(word)
    @word = word
    @wordArr= word.split(//)

    @guesses = ''
    @wrong_guesses = ''
  end

  def word
    @word
  end

  def wrong_guesses
    @wrong_guesses
    end

  def guesses
    puts"guesses: ->#{@guesses}<-"
    return @guesses
  end

  def putInGuesses?(gArr, n)
    garr = gArr.split(//)
    garr.each{|d| 
      return false if(n==d)
    }
    true
    end

  def guess(g)
    puts "&&& guess: #{g}"
    retval = false
    @wordArr.each {|w|  
      puts "^^^^ wordArr[] = #{w}"
      if(g.downcase==w.downcase)
        retval = true
       puts "***** #{g} == #{w} *****"
        ## put in guesses if it's new
        if  putInGuesses?(@guesses, g)
          @guesses +=g 
        end
      end
    }
    if(false == retval)
      @wrong_guesses +=g
    end
    return retval
  end

  def self.get_random_word
    require 'uri'
    require 'net/http'
    uri = URI('http://watchout4snakes.com/wo4snakes/Random/RandomWord')
    Net::HTTP.post_form(uri ,{}).body
  end

end
