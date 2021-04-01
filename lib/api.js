const URL = process.env.API_URL
export async function getPhotos(){
    let response = await fetch(URL);
    let data = await response.json();
    return data;
}