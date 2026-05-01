declare module 'animejs' {
  namespace anime {
    type AnimeTarget =
      | string
      | Element
      | Element[]
      | NodeList
      | HTMLCollection
      | Record<string, unknown>
      | null
      | undefined;

    interface AnimeParams {
      targets?: AnimeTarget;
      duration?: number;
      delay?: number;
      easing?: string;
      loop?: boolean;
      round?: number;
      update?: () => void;
      [key: string]: unknown;
    }

    interface AnimeInstance {
      pause: () => void;
      play: () => void;
      restart: () => void;
    }
  }

  interface AnimeStatic {
    (params: anime.AnimeParams): anime.AnimeInstance;
    remove(targets: anime.AnimeTarget): void;
  }

  const anime: AnimeStatic;

  export default anime;
}
