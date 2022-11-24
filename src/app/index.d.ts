import { Cardano } from './core/interfaces/window-properties.interface';

export {};

declare global {
  interface Window {
    cardano: Cardano | any;
  }
}
