export function getThumbnail(youtubeId) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

export function getWatchUrl(youtubeId) {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

export function getEmbedUrl(youtubeId) {
  return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;
}
