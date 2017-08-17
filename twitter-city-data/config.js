export const location = {
  city: 'berlin',
  country: 'germany',
}

import dotenv from 'dotenv'
dotenv.config()

import Twitter from 'twitter'

export const twitter = new Twitter({
  consumer_key: process.env.TWITTER_KEY,
  consumer_secret: process.env.TWITTER_SECRET,
  // bearer_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})