# blocksite
## Chrome extension for blocking sites
### How to use
1. open chrome://extentions and drop files there
2. open extension's preferences and write your regular expression into textarea.
3. Done.
Now any active tab, which URL's host-name matches your regex, will be automatically closed.
You can check your regex on the site https://regex101.com/
Extension uses regex keys 'gi' and javascript language.

### Why should I use it?
It can be useful, if you spend too much time at social network(fb, youtube, etc). It will help you save your time. 

### Short intro to regex writing
#### Letters
You can write **letters** as they are. For example, you can just write _pornub_ to block pornhub.com

#### Alternation
If you want to set multiple hostnames, just write each of them inside braces and divide with vertical line.
Example: (pornhub)|(xvideos)

As you can see, braces are used for grouping letters and vertical line is used for alternation. If you write pornhu**b**|**x**videos then alternation will work only for 2 letters(b and x).

#### Special characters . ? + * | ( ) [ ] { } ^ $ / \ 
As you saw before, there are characters that do have special meaning. () and | are the examples.
The first one is used for grouping and the second one is for alternation. If you want use brace just as brace, you have to backslash it. This is true also for any other characher with special meaning. 

Here the list of such characters:  . ? + * | ( ) [ ] { } ^ $ / \ 

#### Dot
**Dot-sign** means "any character except of new line". So, it matches almost any character. If you want dot match only dot, you have to backslash it. Example: _fb\.com_

#### Quatifiers { } ? + * 
If you want to set up, how many times should appear some character(or group), then you use quatifier after it.
Example: _(hey){1,3}_ means "hey" from 1 time to 3 times(matches hey and heyhey and heyheyhey)  
Example: _(hey)?_ means "hey" zero or one time(it matches empty string and hey)  
Example: _(hey)+_ means "hey" at least one time(it matches hey and heyhey and any time of hey)  
Example: _(hey)*_ means "hey" any time, even zero time(it matches any string)  
The last example can be a little confusing. The string "Good day" contains "hey" zero time, so it matches _(hey)*_

#### Character class [ ]
Character class is just set of characters. It is writed inside square braces. You can set up the range of characters, using dash sign.
Example: _[a-zA-Z0-9]_ matches one character from a-z or A-Z or 0-9.  
If you want more than one character from set, just use quantifier _[a-zA-Z0-9]{2,10}_

#### Slash and backslash
Omit http:// or https:// in your regex, because / is a special sign and has to be backslashed when it is used just as slash. Example: _http(s)?:\/\/_
So, instead of _http(s)?:\/\/pornhub.com\/_ write just _pornhub_




