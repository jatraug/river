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
    return(!gArr.include?(n))

    # garr = gArr.split(//)
    # garr.each{|d| 
    #   return false if(n==d)
    # }
    # true
    end

  def guess(g)
    throw (:ArgumentError ) if(g =~ /[^a-z,A-Z]/)
    throw :ArgumentError if(g == '')
    throw :ArgumentError if(g == nil)


    return false if(@guesses.include?(g.downcase))
    return false if(@wrong_guesses.include?(g.downcase))

    puts "&&& guess: #{g}"
    retval = false
    @wordArr.each {|w|  
      puts "^^^^ wordArr[] = #{w}"
      if(g.downcase==w.downcase)
        retval = true
       puts "***** #{g} == #{w} *****"
        ## put in guesses if it's new
        if  putInGuesses?(@guesses, g)
          @guesses +=g.downcase
        end
      end
    }
    if(false == retval)
      if  putInGuesses?(@wrong_guesses, g)
        @wrong_guesses +=g
      end
    end
    return retval
  end

  def word_with_guesses
    word = ''
    @word.each_char {|c|
      if @guesses.include?(c)
        word += c
      else
        word += '-'
      end
    }
    word
  end

  def check_win_or_lose
    return :lose if @wrong_guesses.size >= 7
    allLetters = true
    @word.each_char {|c|
      if(false == @guesses.include?(c))
        allLetters = false
      end
    }         
    if(true == allLetters)
      return :win
    else
      return :play
    end
  end    

  def self.get_random_word
    require 'uri'
    require 'net/http'
    uri = URI('http://watchout4snakes.com/wo4snakes/Random/RandomWord')
    Net::HTTP.post_form(uri ,{}).body
  end

end
