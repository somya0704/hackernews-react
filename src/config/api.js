import axios from 'axios';
const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
const newStoriesUrl = 'newstories.json';
const storyUrl = 'item/';

export const GetNewStories = async () => {
  const newStoriesIds = await axios.get(`${baseUrl}${newStoriesUrl}`).then(({data}) => data);
  return newStoriesIds
};

export const GetStory = async (storyId) => {
 const story = await axios.get(`${baseUrl}${storyUrl}${storyId}.json`).then(({data}) => data);
  return story
};
