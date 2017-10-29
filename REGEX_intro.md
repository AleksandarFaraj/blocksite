## Short intro to regex writing
### Letters
You can write **letters** as they are. For example, you can just write _**pornub**_ to block pornhub.com

### Alternation and grouping
If you want to set multiple hostnames, just write each of them inside braces and divide with vertical line.
Example: __(pornhub)|(xvideos)__

As you can see, brackets are used for grouping letters and vertical line is used for alternation. If you write pornhu**b**|**x**videos then alternation will work only for 2 letters(b and x), not for whole words.

Brackets captures value inside it. It's ok, everything will work, you can use it. But capturing is not necessary in this extention. If you want to create group without capturing, you can use this construction __(?:pornhub)|(?:xvideos)__. 

### Special characters . ? + * | ( ) [ ] { } ^ $ / \ 
As you saw before, there are characters that do have special meaning. () and | are the examples.
The first one is used for grouping and the second one is for alternation. If you want use brackets just as brackets, you have to backslash it.  
This is true also for any other characher with special meaning. 

__If you don't need special meaning of character, you have to backslash it__.

Here is __the list of characters with special meaning: . ? + * | ( ) [ ] { } ^ $ / \ __ 

### Dot
**Dot-sign** means "any character except of new line". So, it matches almost any character. If you want dot match only dot, you have to backslash it. Example: __fb\.com__

### Quatifiers { } ? + * 
If you want to set up, how many times should appear some character(or group), then you should use quatifier after it.
1. __x{min,max}__ means __x from min times to max times__  
Example: _(hey){1,3}_ means "hey" from 1 time to 3 times(matches hey and heyhey and heyheyhey)
2. __x?__ means __x zero or one time__  
Example: _(hey)?_  matches strings that don't contain hey and strings that contain it one time
3. __x+__ means __x at least one time__  
Example: _(hey)+_ matches hey and heyhey and any time of hey
4. __x*__ means __x zero or ore times__  
Example: _(hey)*_ it matches any string

The last example can be a little confusing.  
The string "Good day" contains "hey" zero time, so both _(hey)*_ and _(hey)?_ will match it.


### Character class [ ]
Character class is just set of characters. It writes inside square braces. You can set up the range of characters, using dash sign.
1. __[a-z]{2}__ means two lowercase latin characters.
2. __[a-zA-Z]{2,7}__ means __from 2 to 7 latin characters__. Case does not matter.
3. __[a-zA-Z0-9]+__ means __at least one latin character or number__. It matches hektr911
4. __[a-zA-Z0-9\-]+__ means __at least one latin character or number or dash sign__. It matches hektr-911
Yes, dash is special sign, but only when it stays inside square bracets.

### Slash and backslash
Omit http:// or https:// in your regex, because / is a special sign and has to be backslashed, like this  
http(s)?:\\/\\/   
So, instead of http(s)?:\\/\\/fb\\.com\/ write just fb\.com   
It also has one advantage. The latter one will match any url with hostname, containig fb.com(for example m.fb.com). 
But the first one matches only fb.com(because you are restricted conditions and nothing else can appear between https:// and fb.com) 
So, don't use protocol names, only hostnames.
