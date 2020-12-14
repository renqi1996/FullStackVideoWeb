export interface VideoListItemType {
  cover: string;
  createdAt: string;
  episodes: Array<any>;
  name: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface VideoListType {
  page: number;
  lastPage: number;
  total: number;
  data: VideoListItemType[];
}