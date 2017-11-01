# blocksite
## Light and easy way to block websites
### How to use
1. copy files into you computer.
2. open chrome://extentions and drop files there
3. open extension's preferences and write hostnames there. Divide hostnames from each other by space or new line.
4. click save button.  


### Example:
[screenshot][screenshot]


Now any active tab will be automatically closed if your regex matches tab's URL's **hostname**.  
You can check your regex on the site [regex101][regex101]  
You can also use spaces and newlines inside regex, they will be ignored by extension.  
Your regex have to contain at least 5 characters.


### For regex amateurs
You can also use regular expression instead of just typing hostnames.

If you want to block multiple sites, write each of them inside brackets and divide by vertical line from each other:
**(facebook\\.com)|(youtube)**

You can also write it like this:
**(facebook\\.com) | (youtube)**

or like this:  
**(facebook\\.com) |**  
**(youtube) **

If you want to block only single site, just write its hostname:
**facebook\\.com**

You can write less strict regex: **facebook**   

But don't use this if domain name is too short, for example, don't use **vk**, use **vk\\.com** instead.

Note, that dot is backslashed, because it does have special meaning in regular expressions.

### Why should I use it?
It can be useful, if you spend too much time at social network(fb, youtube, etc). Blocksite doesn't send to you any notification/question before or after closing page. It just silent closes page and don't disturb you.

### INTRO TO REGEX
You really don't need that intro. Examples above is enough for most cases. But if you want to know a little more about regular expressions, you can read [REGEX_INTRO.md][regex_intro]

[screenshot]: https://
[regex101]: https://regex101.com/
[regex_intro]: https://github.com/hektr/blocksite/blob/master/REGEX_INTRO.md
