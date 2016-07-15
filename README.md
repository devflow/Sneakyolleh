#Sneakyolleh

###Notes
Latest confirmed date : ``07.07.2016``

###Supported browsers
1. Chrome (crx) - `Not allowed from Google's extension store.`
2. Firefox (xpi) - `Allowed by Mozilla Add-ons Team`
3. Internet Explorer (and ohter browsers that can using fiddle)

###How to work it
if below conditions are all true, insert Referer(value is request url) into your request header.

1. URL is match with ```http://*/*```.
2. The Request method is ```GET```.
3. The request does not have a Referer header.
