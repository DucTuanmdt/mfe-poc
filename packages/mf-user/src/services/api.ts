import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosInstance,
  Method,
  CancelTokenSource,
  InternalAxiosRequestConfig,
} from "axios";

import { IFParams } from "@/model/apiModel";
import { DEFAULT_VALUES } from "@/utils/constants";
import { getAccessToken } from "@/utils/authUtils";

interface IFConfig {
  params?: IFParams;
  payload?: IFParams;
  headers?: IFParams;
}

export class ApiService {
  private apiService: AxiosInstance;
  private static cancelTokens: Map<string, CancelTokenSource> = new Map();

  constructor(baseURL: string) {
    this.apiService = axios.create({ baseURL });
    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor to add the access token
    this.apiService.interceptors.request.use(
      (config: InternalAxiosRequestConfig<any>) => {
        const token = getAccessToken();
        if (token) {
          config.headers = Object.assign(config.headers, {
            Authorization: `Bearer ${token}`,
          });
        }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor to handle errors
    this.apiService.interceptors.response.use(
      (response) => {
        // Successful response, return as is
        return response;
      },
      (error: AxiosError) => {
        if (error.response) {
          // Request made and server responded
          const status = error.response.status;

          switch (status) {
            case 401:
              // Handle 401 error, e.g., redirect to login
              break;
            case 403:
              // Handle 403 error
              break;
            case 500:
              // Handle 500 error
              break;
            default:
              // Handle other statuses
              break;
          }
        } else if (error.request) {
          // The request was made but no response was received
          console.error("Error: No response received", error.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.error("Error:", error.message);
        }

        return Promise.reject(error);
      }
    );
  }

  private static cancelPreviousRequest(apiName: string): void {
    if (this.cancelTokens.has(apiName)) {
      const cancelToken = this.cancelTokens.get(apiName);
      cancelToken?.cancel("Cancelled due to new request to same API");
      this.cancelTokens.delete(apiName);
    }
  }

  private async request<T>(
    url: string,
    method: Method,
    config: IFConfig
  ): Promise<{ data: T | null; error: AxiosError | Error | null }> {
    ApiService.cancelPreviousRequest(url);

    const source = axios.CancelToken.source();
    ApiService.cancelTokens.set(url, source);

    try {
      const axiosConfig: AxiosRequestConfig = {
        url,
        method,
        params: config.params,
        data: config.payload,
        headers: {
          "Content-Type": "application/json",
          ...config.headers,
        },
        timeout: DEFAULT_VALUES.API_TIME_OUT,
        cancelToken: source.token,
      };

      const response = await this.apiService(axiosConfig);

      return { data: response.data, error: null };
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error) && error.code !== "ECONNABORTED") {
        ApiService.cancelTokens.delete(url);
      }

      return { data: null, error: error as AxiosError | Error };
    }
  }

  public get<T>(
    url: string,
    config: IFConfig = {}
  ): Promise<{ data: T | null; error: AxiosError | Error | null }> {
    return this.request(url, "GET", config);
  }

  public post<T>(
    url: string,
    config: IFConfig
  ): Promise<{ data: T | null; error: AxiosError | Error | null }> {
    return this.request(url, "POST", config);
  }

  public put<T>(
    url: string,
    config: IFConfig
  ): Promise<{ data: T | null; error: AxiosError | Error | null }> {
    return this.request(url, "PUT", config);
  }

  public patch<T>(
    url: string,
    config: IFConfig
  ): Promise<{ data: T | null; error: AxiosError | Error | null }> {
    return this.request(url, "PATCH", config);
  }

  public delete<T>(
    url: string,
    config: IFConfig = {}
  ): Promise<{ data: T | null; error: AxiosError | Error | null }> {
    return this.request(url, "DELETE", config);
  }
}

export default ApiService;
