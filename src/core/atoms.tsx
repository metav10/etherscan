import { atom } from "recoil";

export const balanceAtom = atom<number>({
    key: 'balance',
    default: 0
});

export const transactionsAtom = atom<any[]>({
    key: 'transactions',
    default: []
});