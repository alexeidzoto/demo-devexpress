import { Playlist } from '../types';
import { HttpClient } from './http-client';

class PlaylistService extends HttpClient {
  private static classInstance?: PlaylistService;

  private constructor() {
    super(process.env.REACT_APP_SERVICESTACK_API as string);
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new PlaylistService();
    }

    return this.classInstance;
  }

  public all = async () => {
    try {
      const res = await this.instance.get<any>("/playlists", {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      if (res.total > 0) {
        return res.results;
      }
      return []
    } catch (err) {
      throw new Error(`${err.message}`);
    }
  };

  public get = async ({ queryKey }: any) => {
    /* eslint-disable no-unused-vars */
    const [, { initialData }] = queryKey;
    try {
      const res = await this.instance.get<any>(`/playlists/${initialData}`, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      return res.results[0];
    } catch (err) {
      throw new Error(`${err.message}`);
    }
  };

  public add = async (data: Playlist) => {
    try {
      const res = await this.instance.post<any>("/playlists", data, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      return res;
    } catch (err) {
      throw new Error(`${err.message}`);
    }
  };

  public update = async (data: Playlist) => {
    try {
      const res = await this.instance.put<any>(`/playlists/${data.id}`, data, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      return res;
    } catch (err) {
      throw new Error(`${err.message}`);
    }
  };

  public delete = async (id: number) => {
    try {
      const res = await this.instance.delete<any>(`/playlists/${id}`, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      return res;
    } catch (err) {
      throw new Error(`${err.message}`);
    }
  };

}

export const playlistService = PlaylistService.getInstance();
