export interface UnsplashImage {
  description: string;
  alt_description: string;
  user: {
    username: string;
  };
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
  };
  width: number;
  height: number;
}
