declare module '*.css';
declare module '*.less';
declare module '*.png';

declare module 'animejs/lib/anime.es.js';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare const GLOBAL_ENV: string;

declare type InitInfo = {
  userId: number;
  role: number;
};
