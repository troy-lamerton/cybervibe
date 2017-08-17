import _ from 'lodash'
import { writeFileSync } from 'fs'
import path from 'path'

import { twitter as tw, location } from './config'

/* Twitter does not allow searching for tweets tagged with a particular location
   -- you must include a search string

>> instead:

1. search for tweets with #<city-name>
2. search for users whose location is <city-name>
  get their tweets
*/

// note: request tweets for past 12 hours, or another <interval>

// 1. search for tweets with #<city-name>
tw.get('search/tweets', {q: `#${location.city}`})
  .then((tweets) => {

    const tweetjson = JSON.stringify(tweets);

    writeFileSync(path.join(__dirname, 'output', `fetchedAt-${Date.now()}.json`), tweetjson);

    const {statuses} = tweets;

    _.forEach(statuses, (status, i) => {
      console.log(i, status.text);
    });

    console.log(`Total: ${_.size(statuses)} tweets`);
  })
  .catch((err) => {
    console.error(err)
  })

// 2. search for users whose location is <city-name>