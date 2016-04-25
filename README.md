#Sneakyolleh

###Notes
1. the browser except chrome is not currently supported.
2. Latest confirmed date : ``04.25.2016``

###Supported browsers
1. Chrome

###How to work it
if below conditions are all true, insert Referer(value is request url) into your request header.

1. URL is match with ```http://*/```.
2. The Request method is ```GET```.
3. The request does not have a Referer header.
