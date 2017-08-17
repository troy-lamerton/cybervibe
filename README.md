# cybervibe

In order to perform analysis, we need DATA!

What are people living in X city are commenting and posting today?

In the end, all the data will be boiled down to indicators us humans understand, such as **sentiment** (-1 depressing.. to +1 I feel awesome!). Other indicators should be considered as well.

## Sources for data


**Site**|**Access to API**|**Posts have location?**
------------ | ------------- | ------------
[Facebook](https://developers.facebook.com/docs/)|Apply for key|Optional location
[Twitter](https://dev.twitter.com/docs)|Key, great docs|Optional location
[Reddit](https://www.reddit.com/dev/api/)|Open, good docs|Nope. Try `/r/<city_name>`?

**Worth considering:**
* News websites -- analyse the article or comments on the article


If this project goes well, it could be used to see how a certain group of people (target audience) are feeling today. Limiting this to single city to start with, to keep it simple.

## Flow

Every 12 hours

1. Acquire data
2. Extract useful parts
3. Send text blobs to language processing API -- indicators come back
4. Store indicators with the data

Do this for several days, then we can think about how to display the data.
