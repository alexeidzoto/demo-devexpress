import { Album } from '../types';
import { HttpClient } from './http-client';

class AlbumService extends HttpClient {
  private static classInstance?: AlbumService;

  private constructor() {
    super(process.env.REACT_APP_SERVICESTACK_API as string);
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new AlbumService();
    }

    return this.classInstance;
  }

  public all = async () => {
    try {
      const res = await this.instance.get<any>("/albums", {
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
      const res = await this.instance.get<any>(`/albums/${initialData}`, {
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

  public add = async (data: Album) => {
    try {
      const res = await this.instance.post<any>("/albums", data, {
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

  public update = async (data: Album) => {
    try {
      const res = await this.instance.put<any>(`/albums/${data.id}`, data, {
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
      const res = await this.instance.delete<any>(`/albums/${id}`, {
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

export const albumService = AlbumService.getInstance();
