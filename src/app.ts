/*
* File: app.ts
* Author: Serényi Zsolt Ödön
* Copyright: 2023, Serényi Zsolt Ödön
* Group: Szoft II N
* Date: 2023-02-06
* Github: https://github.com/OneBoyTwoGirl
* Licenc: GNU GPL
*/
const weight = document.querySelector("#weight") as HTMLInputElement;
const height = document.querySelector("#height") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLInputElement;
const calcButton = document.querySelector("#calcButton");

function calcIndex(weight: number, height: number):number{
    return weight/(Math.pow(height,2));
}

calcButton.addEventListener('click', event => {
    result.value = String(calcIndex(+weight.value,+height.value).toFixed(0));
})