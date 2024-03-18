const ShowSearchResult = ({ text, searchTerm }) => {
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const parts = text.split(regex);
  const highlightedText = parts.map((part, index) => {
    return part.match(regex) ? <b key={index}>{part}</b> : part;
  });

  return <span>{highlightedText}</span>;
};

export default ShowSearchResult;
