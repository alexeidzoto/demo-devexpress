import { HttpClient } from './http-client';

class TrackService extends HttpClient {
  private static classInstance?: TrackService;

  private constructor() {
    super(process.env.REACT_APP_SERVICESTACK_API as string);
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new TrackService();
    }

    return this.classInstance;
  }

  public all = async () => {
    try {
      const res = await this.instance.get<any>("/tracks", {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      if (res.total > 0) {
        return res.results
      }
      return []
    } catch (err) {
      throw new Error(`${err.message}`);
    }
  };

}

export const trackService = TrackService.getInstance();
