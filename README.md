# blocksite
## Chrome extension for blocking sites using regular expression
### How to use
1. copy files into you computer.
2. open chrome://extentions and drop files there
3. open extension's preferences and write your regular expression into textarea.
4. click save button.  

Now any active tab will be automatically closed if your regex matches its URL's **hostname**(extension works only with hostnames).  
You can check your regex on the site https://regex101.com/  
You can also use spaces and newlines inside it, they will be ignored by extension.  
Your regex have to contain at least 5 characters.


### Examples
(facebook\\.com)|(pornhub)|(xvideos)

You can also write like this:
(facebook\\.com) | (pornhub) | (xvideos)

or like this:  
(facebook\\.com) |  
(pornhub) |  
(xvideos) 

### Description
As you saw, dot is backslashed. Without backslashing dot matches any character. This is how works regular expressions.  


**Vertical line** is alternation sign, it divides one hostname from another.  


Each hostname should be placed inside brackets. **Brackets are used for grouping letters**. 
It allows you use alternations for whole words not for just two letters.  


That's all what you really need to know about regular expressions to use this extension.
Just do like in example above, it's simple. 

If you want to know more, read REGEX_intro.

### Why should I use it?
It can be useful, if you spend too much time at social network(fb, youtube, etc). Blocksite doesn't send you any notification/question before or after closing page. It just silent closes page and don't disturb you. It created for saving you time, not for wasting it.
