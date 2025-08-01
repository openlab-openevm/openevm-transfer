import { SPLToken } from 'token-transfer-core-2022';
import tokenList from 'token-list/tokenlist.json';
import { CHAIN_ID } from './consts';

export const TOKEN_LIST: SPLToken[] = tokenList.tokens.filter((token) => token.chainId === CHAIN_ID) as SPLToken[];
