import request from '../api/axios';
import { VideoListItemType, VideoListType } from '../typing/video';

export async function fetchVideoList () {
  const res = await request<VideoListType>('videos', 'get');
  const { data } = res.data;
  return data;
}
