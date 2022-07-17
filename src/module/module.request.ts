import { axiosInstance } from './axiosInstance';

interface ServerResponse {
  [key: string]: any;
}

const request = async (req: string, setError: (error: { message: string } | null) => void) => {
  try {
    const response = await axiosInstance.request<ServerResponse>({
      method: 'get',
      url: req,
    });

    if (response.status !== 200) {
      throw new Error('Loading error');
    }

    const { data } = await response;

    return data;
  } catch (e) {
    const error: string = (e as Error).message;
    setError({ message: error });
  }
};

export { request };
