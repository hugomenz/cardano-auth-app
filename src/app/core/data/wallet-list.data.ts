/*
import namiImg from '../../../assets/img/nami.svg';
import eternlImg from '../../../assets/img/eternl.png';
import cardwalletImg from '../../../assets/img/cardwallet.svg';
import gerowalletImg from '../../../assets/img/gerowallet.png';
import flintImg from '../../../assets/img/flint.svg';
import nufiImg from '../../../assets/img/nufi.svg'; */

import {
  WalletInfo,
  WalletInfoObj,
} from '../interfaces/walletImgList.interface';

export const walletImgCollection: WalletInfoObj = {
  nami: {
    name: 'nami',
    src: '../../../assets/img/nami.svg',
    url: 'https://namiwallet.io/',
    installed: false,
  },
  eternl: {
    name: 'eternl',
    src: '../../../assets/img/eternl.png',
    url: 'https://linktr.ee/eternlwallet',
    installed: false,
  },
  gerowallet: {
    name: 'gerowallet',
    src: '../../../assets/img/gerowallet.png',
    url: 'https://gerowallet.io/',
    installed: false,
  },
  cardwallet: {
    name: 'cardwallet',
    src: '../../../assets/img/cardwallet.svg',
    url: 'https://cwallet.finance/',
    installed: false,
  },
  flint: {
    name: 'flint',
    src: '../../../assets/img/flint.svg',
    url: 'https://flint-wallet.com/',
    installed: false,
  },
  nufi: {
    name: 'nufi',
    src: '../../../assets/img/nufi.svg',
    url: 'https://nu.fi/',
    installed: false,
  },
};
