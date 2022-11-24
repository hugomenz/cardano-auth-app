export interface WalletInfo {
  name: string;
  src: string;
  url: string;
  installed: boolean;
}

export interface WalletInfoObj {
  [key: string]: WalletInfo;
}
