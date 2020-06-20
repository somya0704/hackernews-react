import axios from 'axios';
const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
const newStoriesUrl = 'newstories.json';
const topStoriesUrl = 'topstories.json';
const askStoriesUrl = 'askstories.json';
const jobStoriesUrl = 'jobstories.json';
const storyUrl = 'item/';

export const GetNewStories = async () => {
  const newStoriesIds = await axios.get(`${baseUrl}${newStoriesUrl}`).then(({data}) => data);
  return newStoriesIds
};

export const GetTopStories = async () => {
  const topStoriesIds = await axios.get(`${baseUrl}${topStoriesUrl}`).then(({data}) => data);
  return topStoriesIds
};

export const GetAskStories = async () => {
  const askStoriesIds = await axios.get(`${baseUrl}${askStoriesUrl}`).then(({data}) => data);
  return askStoriesIds
};

export const GetJobStories = async () => {
  const jobStoriesIds = await axios.get(`${baseUrl}${jobStoriesUrl}`).then(({data}) => data);
  return jobStoriesIds
};

export const GetStory = async (storyId) => {
  const story = await axios.get(`${baseUrl}${storyUrl}${storyId}.json`).then(({data}) => data);
  return story
};
