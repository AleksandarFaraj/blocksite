### Short intro to regex writing
#### Letters
You can write **letters** as they are. For example, you can just write _**pornub**_ to block pornhub.com

#### Alternation and grouping
If you want to set multiple hostnames, just write each of them inside braces and divide with vertical line.
Example: (pornhub)|(xvideos)

As you can see, braces are used for grouping letters and vertical line is used for alternation. If you write pornhu**b**|**x**videos then alternation will work only for 2 letters(b and x), not for whole words.

#### Special characters . ? + * | ( ) [ ] { } ^ $ / \ 
As you saw before, there are characters that do have special meaning. () and | are the examples.
The first one is used for grouping and the second one is for alternation. If you want use brace just as brace, you have to backslash it. This is true also for any other characher with special meaning. 

Here is the list of such characters:  . ? + * | ( ) [ ] { } ^ $ / \ 

#### Dot
**Dot-sign** means "any character except of new line". So, it matches almost any character. If you want dot match only dot, you have to backslash it. Example: _fb\.com_

#### Quatifiers { } ? + * 
If you want to set up, how many times should appear some character(or group), then you should use quatifier after it.
1. **x{min,max}** means x appears from min times to max times 
Example: _(hey){1,3}_ means "hey" from 1 time to 3 times(matches hey and heyhey and heyheyhey)  
2. **x?** means x **zero or one time**. 
Example: _(hey)?_  matches strings that don't contain hey and strings that contain it one time  
3. **x+** means x at least one time
Example: _(hey)+_ matches hey and heyhey and any time of hey  
4. __x*__ means x zero or ore times
Example: _(hey)*_ it matches any string  

The last example can be a little confusing. The string "Good day" contains "hey" zero time, so it matches _(hey)*_
The same thing with _(hey)?_

#### Character class [ ]
Character class is just set of characters. It is writed inside square braces. You can set up the range of characters, using dash sign.
- [a-z]{2} means two lowercase latin characters.
- [a-zA-Z]{2,7} means from two to seven latin characters. Case does not matter.
- [a-zA-Z0-9]
Example: _[a-zA-Z0-9]_ matches one character from a-z or A-Z or 0-9.  
If you want more than one character from set, just use quantifier _[a-zA-Z0-9]{2,10}_
Yes, dash is special sign, but only when it stays inside square bracets.

#### Slash and backslash
Omit http:// or https:// in your regex, because / is a special sign and has to be backslashed when it is used just as slash. Example: _http(s)?:\/\/_
So, instead of _http(s)?:\/\/pornhub.com\/_ write just _pornhub_

