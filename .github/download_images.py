import requests
import json
import wget
import os

GOOGLE_OAUTH_CLIENT_ID=os.environ["GOOGLE_OAUTH_CLIENT_ID"]
GOOGLE_OAUTH_CLIENT_SECRET=os.environ["GOOGLE_OAUTH_CLIENT_SECRET"]
GOOGLE_REFRESH_TOKEN=os.environ["GOOGLE_REFRESH_TOKEN"]
PHOTOS_COUNT = 25

if os.path.isdir("public/images"):
    os.system("rm -rf public/images")

if os.path.isdir("data"):
    os.system("rm -rf data")
    
os.mkdir("public/images")
os.mkdir("data")
def get_access_token():
    url = "https://oauth2.googleapis.com/token"
    return requests.post(url,data={
        "grant_type":"refresh_token",
        "client_id":GOOGLE_OAUTH_CLIENT_ID,
        "client_secret":GOOGLE_OAUTH_CLIENT_SECRET,
        "refresh_token":GOOGLE_REFRESH_TOKEN
    }).json()["access_token"]

def get_all_photos(access_token):
    url = "https://photoslibrary.googleapis.com/v1/mediaItems:search"
    photos = []
    nextPageToken = None
    reqData = {
        "pageSize": 100,
        "albumId": "AGnaQFtOTNmvSOELPRc45CMO0vKtDyaG_SsQklUpv4rfGMkDToeZa19FWTkr-iS0JzeBO5el1vC-TQsVdRlFj0Gq5RqHLhdHRA"
    } 
    data = requests.post(url,data=reqData,headers={
        "Authorization": "Bearer " + access_token,
    }).json()
    photos.extend(data["mediaItems"])
    while "nextPageToken" in data.keys():
        reqData["pageToken"] = data["nextPageToken"]
        data = requests.post(url,data=reqData,headers={
        "Authorization": "Bearer " + access_token,
        }).json()
        photos.extend(data["mediaItems"])
        print(len(photos))
    photos.reverse()
    return photos

def download_photos(photos):
    data = []
    for idx,photo in enumerate(photos):
        width = int(photo["mediaMetadata"]["width"])
        height = int(photo["mediaMetadata"]["height"])
        url = photo["baseUrl"]
        ratio = width/height
        if width > height:
            if width > 1920:
                ratio = width / 1920
                width = 1920
                height = round(height / ratio)
            url += f"=w{width}"
        else:
            if height > 1080:
                ratio = height / 1080
                height = 1080
                width = round(width /ratio)
            url += f"=h{height}"
        wget.download(url,f"public/images/{idx}.jpg")
        data.append({
            "width": width,
            "height": height,
            "url": url,
            "name": f"images/{idx}.jpg"
        })
    json.dump(data,open("data/images.json","w"))


photos = get_all_photos(get_access_token())[:PHOTOS_COUNT]
download_photos(photos)
