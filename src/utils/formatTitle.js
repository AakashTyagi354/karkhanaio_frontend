const formatTitle = (title,len) => {
  if (title.length < len) return title;
  return title.substring(0, len) + " ...";
};

export default formatTitle;
