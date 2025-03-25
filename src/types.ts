export type TCharacter = {
  created: string,
  gender: string,
  id: number,
  image: string,
  name: string,
  species: string,
  status: string,
  type: string,
}

declare global {
  interface Window {
    __SSR_DATA__?: TCharacter[];
  }
}
