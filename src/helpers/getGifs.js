
export const getGifs = async (category) => {
    const url =
  `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=eXCn5wlrd5WTpDulATEk7H20u4iCJnZR`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(
      ({
        id,
        title,
        images: {
          downsized_medium: { url },
        },
      }) => {
        return {
          id,
          title,
          url,
        };
      }
    );
    
    return gifs;
  };