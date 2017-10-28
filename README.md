# blocksite
## Chrome extension for blocking sites
### How to use
1. copy files into you computer.
2. open chrome://extentions and drop files there
3. open extension's preferences and write your regular expression into textarea.
4. click save button.  

Now any active tab, which URL's host-name matches your regex, will be automatically closed.  
You can check your regex on the site https://regex101.com/  
You can also use spaces and newlines, they will be ignored by extension.  

### Examples
(fb\\.com)|(pornhub)|(xvideos)

You can also write like this:
(fb\\.com) | (pornhub) | (xvideos)

or like this:  
(fb\\.com) |  
(pornhub) |  
(xvideos) 

Dot should be backslashed. Without backslashing dot match any character.
Just do like in examples above, it's simple.

### Why should I use it?
It can be useful, if you spend too much time at social network(fb, youtube, etc). Blocksite doesn't send you any notification/question before or after closing page. It just silent closes page and don't disturb you. It created for saving you time, not for wasting it.

### TO DO
* short introduction to regular expression
