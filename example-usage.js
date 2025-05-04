import extractor from './extractor.json';

const baseUrl = "https://api.consumet.org";

// Simulation of user selection of episode 5 of One Piece
const animeTitle = "one piece";
const animeId = "one piece";
const episodeId = "one-piece-episode-5";
const provider = "animekai";  // Can be 'gogoanime' or 'zoro', depends on your selection

const searchUrl = baseUrl + extractor.providers[provider].search.url.replace("{query}", animeTitle);
const infoUrl = baseUrl + extractor.providers[provider].info.url.replace("{id}", animeId);
const watchUrl = baseUrl + extractor.providers[provider].watch?.url.replace("{episodeId}", episodeId);

console.log("Search URL:", searchUrl);
console.log("Info URL:", infoUrl);
console.log("Watch URL:", watchUrl);
