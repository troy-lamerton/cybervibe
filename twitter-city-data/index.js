import _ from 'lodash'
import { writeFileSync } from 'fs'
import path from 'path'

import { twitter as tw } from './config'

tw.get('search/tweets', {q: 'I just liked'})
  .then((tweets) => {
    const tweetjson = JSON.stringify(tweets);
    writeFileSync(path.join(__dirname, 'tweetsdata.json'), tweetjson);
    const {statuses} = tweets;
    _.forEach(statuses, (status, i) => {
      console.log(i, status.text);
    });
    console.log(`Total: ${_.size(statuses)} tweets`);
  })
  .catch((err) => {
    console.error(err)
  })