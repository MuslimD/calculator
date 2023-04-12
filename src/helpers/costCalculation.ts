import { Iconfigure } from "../types/Iconfigure";

export const costCalculation = ({
  telephone,
  telephoneValidate,
  operation,
  minuts,
  internet,
  rentWiFiRouter,
  ransomWiFiRouter,
  faceBook,
  vK,
  oK,
  instagram,
  tikTok,
}: Iconfigure): number => {
  let sum = 0;
  if (minuts === "0") {
    sum = 200;
  }
  if (minuts === "34") {
    sum = 350;
  }
  if (minuts === "66") {
    sum = 600;
  }
  if (minuts === "100") {
    sum = 650;
  }
  if (internet === "0") {
    sum = sum + 50;
  }
  if (internet === "34") {
    sum = sum + 150;
  }
  if (internet === "66") {
    sum = sum + 300;
  }
  if (internet === "100") {
    sum = sum + 350;
  }
  if (rentWiFiRouter) {
    sum = sum + 99;
  }
  if (ransomWiFiRouter) {
    sum = sum + 2600;
  }
  if (faceBook) {
    sum = sum + 20;
  }
  if (vK) {
    sum = sum + 20;
  }
  if (oK) {
    sum = sum + 20;
  }
  if (instagram) {
    sum = sum + 60;
  }
  if (tikTok) {
    sum = sum + 60;
  }
  return sum;
};
