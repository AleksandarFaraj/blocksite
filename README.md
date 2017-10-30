# blocksite
## Chrome extension for blocking sites using regular expression
### How to use
1. copy files into you computer.
2. open chrome://extentions and drop files there
3. open extension's preferences and write your regular expression into textarea.
4. click save button.  

Now any active tab will be automatically closed if your regex matches tab's URL's **hostname**.  
You can check your regex on the site https://regex101.com/  
You can also use spaces and newlines inside regex, they will be ignored by extension.  
Your regex have to contain at least 5 characters.


### Examples and description
If you want to block multiple sites, write each of them inside brackets and divide by vertical line from each other:
**(facebook\\.com)|(pornhub)|(xvideos)**

You can also write it like this:
**(facebook\\.com) | (pornhub) | (xvideos)**

or like this:  
**(facebook\\.com) |**  
**(pornhub) |**  
**(xvideos)**   

If you want to block only single site, just write its hostname without brackets:
**facebook\\.com**

You can write less strict regex: **facebook**   

But don't use this if domain name is too short, for example, don't use **vk**, use **vk\\.com** instead.

Note, that dot is backslashed, because it does have special meaning in regular expressions.

### Why should I use it?
It can be useful, if you spend too much time at social network(fb, youtube, etc). Blocksite doesn't send to you any notification/question before or after closing page. It just silent closes page and don't disturb you.
