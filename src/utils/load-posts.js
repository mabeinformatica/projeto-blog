export const loadPosts = async () => {
  const postResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos');

  const [posts, photos] = await Promise.all([postResponse, photoResponse]);

  const postsJSON = await posts.json();
  const photoJSON = await photos.json();

  const publish = postsJSON.map((post, index) => {
    return { ...post, cover: photoJSON[index].url };
  });

  return publish;
};
