import { URL, KEY } from "../contses";

export const getTransactions = (address: string) => {
    return fetch(`${URL}action=txlist&address=${address}&sort=desc&apikey=${KEY})`, {
        method: "GET",
    }).then((res) => {
        const { status } = res;
        if (status >= 200 && status < 300) {
            return res.json();
        }
        console.log("Error has been occurred " + status);
    }).then((res) => res);
}

export const getBalance = (address: string) => {
    return fetch(`${URL}action=balance&address=${address}&tag=latest&apikey=${KEY})`, {
        method: "GET",
    }).then((res) => {
        const { status } = res;
        if (status >= 200 && status < 300) {
            return res.json();
        }
        console.log("Error has been occurred " + status);
    }).then((res) => res);
}