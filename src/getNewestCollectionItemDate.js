module.exports = function(collection, emptyFallbackDate) {
  if( !collection || !collection.length ) {
    return emptyFallbackDate || new Date();
  }

  return new Date(Math.max(...collection.filter(item => !item.data?.draft).map(item => {return item.date})));
}
