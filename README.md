# Zantaku Anime Extractor Using (Consumet API)

This JSON-based extractor lets you plug into the Consumet API to search anime, get anime info, and stream episodes using providers like AnimeKai, Gogoanime, and Zoro for Zantaku Application as test

## Files
- `extractor.json` — defines the endpoints and parameter structure.
- `example-usage.js` — sample usage with dynamic query replacement.

## Notes
- Use the `query` key for searching inputs.
- Replace `id` with the actual anime slug from the search or the info call.
- To watch a specific episode, plug in the appropriate episode id and replace `episodeId` with the specified correct one.
- All values in the JSON are examples(get guided from here and change it) and should be replaced dynamically based on user input.

## Example (in JS language)
```js
import extractor from './extractor.json';

const baseUrl = "https://api.consumet.org";
const provider = "animekai";

const animeTitle = "naruto";
const animeId = "naruto";
const episodeId = "naruto-episode-5";

const searchUrl = baseUrl + extractor.providers[provider].search.url.replace("{query}", animeTitle);
const infoUrl = baseUrl + extractor.providers[provider].info.url.replace("{id}", animeId);
const watchUrl = baseUrl + extractor.providers[provider].watch?.url.replace("{episodeId}", episodeId);

console.log("Search URL:", searchUrl);
console.log("Info URL:", infoUrl);
console.log("Watch URL:", watchUrl);
