#Sneakyolleh

###Notes
Latest confirmed date : ``04.26.2016``

###Supported browsers
1. Chrome (crx)
2. Firefox (xpi)
3. Internet Explorer (and ohter browsers that can using fiddle)

###How to work it
if below conditions are all true, insert Referer(value is request url) into your request header.

1. URL is match with ```http://*/```.
2. The Request method is ```GET```.
3. The request does not have a Referer header.
