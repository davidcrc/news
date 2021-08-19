import { API_HOST } from "../utils/constants";

export async function getNewsApi() {
  const url = `${API_HOST}/news?_sort=created_at:DESC&_limit=100`
  console.log("la url", url)
  // Utilizando async await
  const response = await fetch(url);
  return await response.json();
}