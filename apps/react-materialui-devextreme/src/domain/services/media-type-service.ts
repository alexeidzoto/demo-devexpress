import { MediaType } from '../types';
import { HttpClient } from './http-client';

class MediaTypeService extends HttpClient {
  private static classInstance?: MediaTypeService;

  private constructor() {
    super(process.env.REACT_APP_SERVICESTACK_API as string);
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new MediaTypeService();
    }

    return this.classInstance;
  }

  public all = async () => {
    try {
      const res = await this.instance.get<any>("/mediatypes", {
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
      const res = await this.instance.get<any>(`/mediatypes/${initialData}`, {
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

  public add = async (data: MediaType) => {
    try {
      const res = await this.instance.post<any>("/mediatypes", data, {
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

  public update = async (data: MediaType) => {
    try {
      const res = await this.instance.put<any>(`/mediatypes/${data.id}`, data, {
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
      const res = await this.instance.delete<any>(`/mediatypes/${id}`, {
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

export const mediatypeService = MediaTypeService.getInstance();
