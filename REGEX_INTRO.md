## Short intro to regex writing

### Letters
You can write **letters** as they are. For example, you can just write _**pornub**_ to block pornhub.com

### Choice and grouping
If you want to use multiple hostnames, just write each of them inside brackets and divide with vertical line.
Example: __(pornhub)|(xvideos)__

As you can see, brackets are used for grouping letters and vertical line means OR. If you write pornhu**b**|**x**videos then vertical line will work only for 2 letters(b and x), not for whole words.

Brackets capture value inside it. It's ok, everything will work, you can use it. But capturing is not necessary in this extention. If you want to create groups without capturing, you can use this construction __(?:pornhub)|(?:xvideos)__. 

### Special characters . ? + * | ( ) [ ] { } ^ $ / \ 
As you saw before, there are characters that do have special meaning. ( ) and | are the examples.
If you want use brackets just as brackets, you have to backslash it.  
This is true also for any other characher with special meaning. 

__If you don't need special meaning of character, you have to backslash it__.

Here is the list of characters with special meaning: . ? + * | ( ) [ ] { } ^ $ / \  

### Dot
**Dot-sign** means "any character except of new line".   

If you want dot match only dot, you have to backslash it. Example: __facebook\\.com__

### Quatifiers { } ? + * 
1. __x{min,max}__ means __x from min times to max times__  
Example: _(hey){1,3}_ means "hey" from 1 time to 3 times(matches hey and heyhey and heyheyhey)
2. __x?__ means __x zero or one time__  
Example: _(hey)?_  matches strings that don't contain hey and strings that contain it one time
3. __x+__ means __x at least one time__  
Example: _(hey)+_ matches hey and heyhey and any time of hey
4. __x*__ means __x zero or ore times__  
Example: _(hey)*_ matches any string

The last example can be a little confusing.  
The string "Good day" contains "hey" zero time, so both _(hey)*_ and _(hey)?_ will match it.


### Character class [ ]
Character class is just set of characters. They are placed inside square brackets. You can set up the range of characters, using dash sign.  
Yes, dash is a special sign, but only when it stays inside square brackets.
1. __[a-z]{2}__ means two lowercase latin characters.
2. __[a-zA-Z]{2,7}__ means __from 2 to 7 latin characters__. Case does not matter.
3. __[a-zA-Z0-9]+__ means __at least one latin character or number__. It matches hektr911
4. __[a-zA-Z0-9\\-]+__ means __at least one latin character or number or dash sign__. It matches hektr-911  

You can also invert character class, using ^ sign inside it.
-  __[^0-9]__ matches any single character that is __not__ digit.

### Backslash
Backslash \ does have special meaning. It makes from "special" characters "normal" ones. But it can also do vice versa.
I've not told you about character classes, started with backslash. For example, 
1. __\\d__ means "digit" and is equal to [0-9].  
2. __\\D__ is equal to [^0-9]
3. __\\s__ matches any "whitespace" symbol(space, newline, tabulation, etc)  
and so on...

If you use backslash and don't want it suddenly backslash something, then backslash your backslash:  
-  __\\\d__ is just backlash and d letter, not character class.


### Slash
Slash does also have special meaning. It used as regex delimiter: /regex/. Anytime you use it inside regex, backslash it.  

__Note, that you should not use slash as delimiter at blocksite extension. Blocksite knows, where regex starts and ends.__

### Practise
Now you can go to [regex101][regex101] and check your regex writing skills.

[regex101]: https://regex101.com/
