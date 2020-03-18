import { bingApiUrl, bingKey } from './../utils/consts';
import {
  FETCHING_IMAGES,
  FETCHING_IMAGES_SUCCESS,
} from './../utils/ActionTypes';

export default function FetchingImages(query) {
  return (dispatch) => {
    dispatch({ type: FETCHING_IMAGES, payload: query });

    let response = fetch(
      'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b5acf054ee662671ac5ff085e5087792&format=json&nojsoncallback=1&text=' +
        query +
        '&extras=url_o',
    );

    return response
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: FETCHING_IMAGES_SUCCESS, payload: data.photos.photo });
      });
  };
}
