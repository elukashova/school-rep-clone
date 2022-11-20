/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 91:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 250:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEwOV8xMDgpIj4KPHBhdGggZD0iTTYwLjg2ODIgNS44NjgzMkM2Mi44MTkzIDcuODE5NDQgNjIuODIxMSAxMC45ODIzIDYwLjg3MjEgMTIuOTM1NUwzNy4zOTA2IDM2LjQ2ODNDMzUuNDQzMSAzOC40MjAxIDM1LjQ0MzEgNDEuNTc5OSAzNy4zOTA2IDQzLjUzMTdMNjAuODcyMSA2Ny4wNjQ1QzYyLjgyMTEgNjkuMDE3NyA2Mi44MTkzIDcyLjE4MDYgNjAuODY4MiA3NC4xMzE3TDU4LjUzNTQgNzYuNDY0NUM1Ni41ODI4IDc4LjQxNzEgNTMuNDE3IDc4LjQxNzEgNTEuNDY0NCA3Ni40NjQ1TDE4LjUzNTQgNDMuNTM1NUMxNi41ODI4IDQxLjU4MjkgMTYuNTgyOCAzOC40MTcxIDE4LjUzNTQgMzYuNDY0NUw1MS40NjQ0IDMuNTM1NTRDNTMuNDE3IDEuNTgyOTIgNTYuNTgyOCAxLjU4MjkxIDU4LjUzNTQgMy41MzU1NEw2MC44NjgyIDUuODY4MzJaIiBmaWxsPSIjMUQzNTU1Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTA5XzEwOCI+CjxyZWN0IHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";

/***/ }),

/***/ 182:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjUzMTcgNzQuMTMxN0MxNi41ODA2IDcyLjE4MDYgMTYuNTc4OCA2OS4wMTc3IDE4LjUyNzggNjcuMDY0NUw0Mi4wMDkzIDQzLjUzMTdDNDMuOTU2OCA0MS41Nzk5IDQzLjk1NjggMzguNDIwMSA0Mi4wMDk0IDM2LjQ2ODNMMTguNTI3OCAxMi45MzU1QzE2LjU3ODggMTAuOTgyMyAxNi41ODA2IDcuODE5NDMgMTguNTMxNyA1Ljg2ODMyTDIwLjg2NDUgMy41MzU1M0MyMi44MTcxIDEuNTgyOTEgMjUuOTgyOSAxLjU4MjkxIDI3LjkzNTUgMy41MzU1M0w2MC44NjQ1IDM2LjQ2NDVDNjIuODE3MSAzOC40MTcxIDYyLjgxNzEgNDEuNTgyOSA2MC44NjQ1IDQzLjUzNTVMMjcuOTM1NSA3Ni40NjQ1QzI1Ljk4MjkgNzguNDE3MSAyMi44MTcxIDc4LjQxNzEgMjAuODY0NSA3Ni40NjQ1TDE4LjUzMTcgNzQuMTMxN1oiIGZpbGw9IiMxRDM1NTUiLz4KPC9zdmc+Cg==";

/***/ }),

/***/ 181:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODEiIGhlaWdodD0iODEiIHZpZXdCb3g9IjAgMCA4MSA4MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguODI2MTYgODAuNTY4MkM3LjQ0Njg1IDgwLjU2ODIgNi4wNjc1NCA4MC4xNTc1IDQuNjg4MjIgNzkuNTQxM0MyLjE1OTQ5IDc4LjMwODkgMC41NTAyOTMgNzUuODQ0MyAwLjU1MDI5MyA3My4xNzQyVjcuODU5NjVDMC41NTAyOTMgNS4xODk1NiAyLjE1OTQ5IDIuNzI0ODUgNC42ODgyMiAxLjQ5MjVDNy4yMTY5NiAwLjI2MDE1IDEwLjQzNTQgMC4yNjAxNSAxMi45NjQxIDEuNDkyNUw3Ni40MTI0IDM0LjE0OThDNzguOTQxMSAzNS4zODIxIDgwLjU1MDMgMzcuODQ2OCA4MC41NTAzIDQwLjUxNjlDODAuNTUwMyA0My4xODcgNzguOTQxMSA0NS42NTE3IDc2LjQxMjQgNDYuODg0TDEyLjk2NDEgNzkuNTQxM0MxMS41ODQ4IDgwLjE1NzUgMTAuMjA1NSA4MC41NjgyIDguODI2MTYgODAuNTY4MloiIGZpbGw9IiNGRkM3MDAiLz4KPC9zdmc+Cg==";

/***/ }),

/***/ 201:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDU1Mi44IDIwNS4zIj48c3R5bGU+LnN0MHtmaWxsOiNmZmZ9LnN0MXtjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyl9LnN0MntjbGlwLXBhdGg6dXJsKCNTVkdJRF80Xyl9LnN0M3tjbGlwLXBhdGg6dXJsKCNTVkdJRF82Xyl9LnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF84Xyl9LnN0NXtmaWxsOiNmZmY7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTB9LnN0NntjbGlwLXBhdGg6dXJsKCNTVkdJRF84Xyl9LnN0Niwuc3Q3e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMH0uc3Q4LC5zdDl7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMTBfKX0uc3Q5e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMH08L3N0eWxlPjx0aXRsZT5yc19zY2hvb2xfanM8L3RpdGxlPjxwYXRoIGQ9Ik0yODUuNCA2OGwyNi4zLTEuN2MuNiA0LjMgMS43IDcuNSAzLjUgOS44IDIuOSAzLjYgNi45IDUuNCAxMi4yIDUuNCAzLjkgMCA3LS45IDkuMS0yLjggMi0xLjUgMy4yLTMuOSAzLjItNi40IDAtMi40LTEuMS00LjctMy02LjItMi0xLjgtNi43LTMuNi0xNC4xLTUuMi0xMi4xLTIuNy0yMC44LTYuMy0yNS45LTEwLjktNS4xLTQuMy04LTEwLjYtNy44LTE3LjMgMC00LjYgMS40LTkuMiA0LTEzIDMtNC4zIDcuMS03LjcgMTItOS42IDUuMy0yLjMgMTIuNy0zLjUgMjItMy41IDExLjQgMCAyMC4xIDIuMSAyNi4xIDYuNCA2IDQuMiA5LjYgMTEgMTAuNyAyMC4zbC0yNiAxLjVjLS43LTQtMi4xLTYuOS00LjQtOC44cy01LjMtMi44LTkuMi0yLjhjLTMuMiAwLTUuNi43LTcuMiAyLTEuNSAxLjItMi41IDMtMi40IDUgMCAxLjUuOCAyLjkgMiAzLjggMS4zIDEuMiA0LjQgMi4zIDkuMyAzLjMgMTIuMSAyLjYgMjAuNyA1LjIgMjYgNy45IDUuMyAyLjcgOS4xIDYgMTEuNCA5LjkgMi40IDQgMy42IDguNiAzLjUgMTMuMyAwIDUuNi0xLjYgMTEuMi00LjggMTUuOS0zLjMgNC45LTcuOSA4LjctMTMuMyAxMS01LjcgMi41LTEyLjkgMy44LTIxLjUgMy44LTE1LjIgMC0yNS43LTIuOS0zMS42LTguOFMyODYuMSA3NyAyODUuNCA2OHpNNi4zIDk3LjZWOC4yaDQ2LjFjOC41IDAgMTUuMS43IDE5LjYgMi4yIDQuNCAxLjQgOC4zIDQuMyAxMC45IDguMiAyLjkgNC4zIDQuMyA5LjMgNC4yIDE0LjUuMyA4LjgtNC4yIDE3LjItMTEuOSAyMS42LTMgMS43LTYuMyAyLjktOS43IDMuNSAyLjUuNyA1IDEuOSA3LjIgMy4zIDEuNyAxLjQgMy4xIDMgNC40IDQuNyAxLjUgMS43IDIuOCAzLjYgMy45IDUuNmwxMy40IDI1LjlINjNMNDguMiA3MC4yYy0xLjktMy41LTMuNS01LjgtNS02LjktMi0xLjQtNC40LTIuMS02LjgtMi4xSDM0djM2LjNINi4zek0zNCA0NC40aDExLjdjMi41LS4yIDQuOS0uNiA3LjMtMS4yIDEuOC0uMyAzLjQtMS4zIDQuNS0yLjggMi43LTMuNiAyLjMtOC43LTEtMTEuOC0xLjgtMS41LTUuMy0yLjMtMTAuMy0yLjNIMzR2MTguMXpNMCAxNzQuMmwyNi4zLTEuN2MuNiA0LjMgMS43IDcuNSAzLjUgOS44IDIuOCAzLjYgNi45IDUuNSAxMi4yIDUuNSAzLjkgMCA3LS45IDkuMS0yLjggMi0xLjYgMy4yLTMuOSAzLjItNi40IDAtMi40LTEuMS00LjctMy02LjItMi0xLjgtNi43LTMuNi0xNC4yLTUuMi0xMi4xLTIuNy0yMC44LTYuMy0yNS45LTEwLjktNS4xLTQuMy04LTEwLjYtNy44LTE3LjMgMC00LjYgMS40LTkuMiA0LTEzIDMtNC4zIDcuMS03LjcgMTItOS42IDUuMy0yLjMgMTIuNy0zLjUgMjItMy41IDExLjQgMCAyMC4xIDIuMSAyNi4xIDYuNHM5LjUgMTEgMTAuNiAyMC4zbC0yNiAxLjVjLS43LTQtMi4xLTYuOS00LjQtOC44LTIuMi0xLjktNS4zLTIuOC05LjItMi43LTMuMiAwLTUuNi43LTcuMiAyLjEtMS42IDEuMi0yLjUgMy0yLjQgNSAwIDEuNS44IDIuOSAyIDMuOCAxLjMgMS4yIDQuNCAyLjMgOS4zIDMuMyAxMi4xIDIuNiAyMC43IDUuMiAyNiA3LjkgNS4zIDIuNyA5LjEgNiAxMS40IDkuOSAyLjQgNCAzLjYgOC42IDMuNiAxMy4yIDAgNS42LTEuNyAxMS4xLTQuOCAxNS44LTMuMyA0LjktNy45IDguNy0xMy4zIDExLTUuNyAyLjUtMTIuOSAzLjgtMjEuNSAzLjgtMTUuMiAwLTI1LjctMi45LTMxLjYtOC44LTUuOS02LTkuMi0xMy40LTEwLTIyLjR6Ii8+PHBhdGggZD0iTTEzMyAxNjcuMmwyNC4yIDcuM2MtMS4zIDYuMS00IDExLjktNy43IDE3LTMuNCA0LjUtNy45IDgtMTMgMTAuMy01LjIgMi4zLTExLjggMy41LTE5LjggMy41LTkuNyAwLTE3LjctMS40LTIzLjgtNC4yLTYuMi0yLjgtMTEuNS03LjgtMTYtMTQuOS00LjUtNy4xLTYuNy0xNi4yLTYuNy0yNy4zIDAtMTQuOCAzLjktMjYuMiAxMS44LTM0LjFzMTktMTEuOSAzMy40LTExLjljMTEuMyAwIDIwLjEgMi4zIDI2LjYgNi44IDYuNCA0LjYgMTEuMiAxMS42IDE0LjQgMjFsLTI0LjQgNS40Yy0uNi0yLjEtMS41LTQuMi0yLjctNi0xLjUtMi4xLTMuNC0zLjctNS43LTQuOS0yLjMtMS4yLTQuOS0xLjctNy41LTEuNy02LjMgMC0xMS4xIDIuNS0xNC40IDcuNi0yLjUgMy43LTMuOCA5LjYtMy44IDE3LjYgMCA5LjkgMS41IDE2LjcgNC41IDIwLjQgMyAzLjcgNy4yIDUuNSAxMi43IDUuNSA1LjMgMCA5LjMtMS41IDEyLTQuNCAyLjctMy4xIDQuNy03LjQgNS45LTEzem01Ni41LTUyLjhoMjcuNnYzMS4zaDMwLjJ2LTMxLjNoMjcuOHY4OS40aC0yNy44di0zNi4yaC0zMC4ydjM2LjJoLTI3LjZ2LTg5LjR6Ii8+PHBhdGggZD0iTTI3MS4zIDE1OS4xYzAtMTQuNiA0LjEtMjYgMTIuMi0zNC4xIDguMS04LjEgMTkuNS0xMi4yIDM0LTEyLjIgMTQuOSAwIDI2LjMgNCAzNC40IDEyUzM2NCAxNDQgMzY0IDE1OC40YzAgMTAuNS0xLjggMTktNS4zIDI1LjctMy40IDYuNi04LjcgMTItMTUuMiAxNS42LTYuNyAzLjctMTUgNS42LTI0LjkgNS42LTEwLjEgMC0xOC40LTEuNi0yNS00LjgtNi44LTMuNC0xMi40LTguNy0xNi4xLTE1LjItNC4xLTctNi4yLTE1LjctNi4yLTI2LjJ6bTI3LjYuMWMwIDkgMS43IDE1LjUgNSAxOS41IDMuMyAzLjkgNy45IDUuOSAxMy43IDUuOSA1LjkgMCAxMC41LTEuOSAxMy44LTUuOHM0LjktMTAuOCA0LjktMjAuOGMwLTguNC0xLjctMTQuNi01LjEtMTguNC0zLjQtMy45LTgtNS44LTEzLjgtNS44LTUuMS0uMi0xMCAyLTEzLjQgNS45LTMuNCAzLjktNS4xIDEwLjQtNS4xIDE5LjV6bTkzLjQtLjFjMC0xNC42IDQuMS0yNiAxMi4yLTM0LjEgOC4xLTguMSAxOS41LTEyLjIgMzQtMTIuMiAxNC45IDAgMjYuNCA0IDM0LjQgMTJTNDg1IDE0NCA0ODUgMTU4LjRjMCAxMC41LTEuOCAxOS01LjMgMjUuNy0zLjQgNi42LTguNyAxMi0xNS4yIDE1LjYtNi43IDMuNy0xNSA1LjYtMjQuOSA1LjYtMTAuMSAwLTE4LjQtMS42LTI1LTQuOC02LjgtMy40LTEyLjQtOC43LTE2LjEtMTUuMi00LjEtNy02LjItMTUuNy02LjItMjYuMnptMjcuNi4xYzAgOSAxLjcgMTUuNSA1IDE5LjUgMy4zIDMuOSA3LjkgNS45IDEzLjcgNS45IDUuOSAwIDEwLjUtMS45IDEzLjgtNS44IDMuMy0zLjkgNC45LTEwLjggNC45LTIwLjggMC04LjQtMS43LTE0LjYtNS4xLTE4LjQtMy40LTMuOS04LTUuOC0xMy44LTUuOC01LjEtLjItMTAuMSAyLTEzLjQgNS45LTMuNCAzLjktNS4xIDEwLjQtNS4xIDE5LjV6Ii8+PHBhdGggZD0iTTQ4Mi4xIDExNC40aDI3LjZ2NjcuNGg0My4xdjIySDQ4MnYtODkuNHoiLz48ZWxsaXBzZSB0cmFuc2Zvcm09InJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OCkiIGNsYXNzPSJzdDAiIGN4PSI0MjAuNSIgY3k9IjY3LjkiIHJ4PSI2MyIgcnk9IjUxLjgiLz48ZGVmcz48ZWxsaXBzZSBpZD0iU1ZHSURfMV8iIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KSIgY3g9IjQyMC41IiBjeT0iNjcuOSIgcng9IjYzIiByeT0iNTEuOCIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj48dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxnIGNsYXNzPSJzdDEiPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjgyIDY4LjM1MykiIGNsYXNzPSJzdDAiIGQ9Ik0zMzAuOS0xNC4yaDE3OS44djE2NS4xSDMzMC45eiIvPjxnIGlkPSJMYXllcl8yXzFfIj48ZGVmcz48cGF0aCBpZD0iU1ZHSURfM18iIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjgyIDY4LjM1MykiIGQ9Ik0zMzAuOS0xNC4yaDE3OS44djE2NS4xSDMzMC45eiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzRfIj48dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8zXyIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxnIGlkPSJMYXllcl8xLTIiIGNsYXNzPSJzdDIiPjxlbGxpcHNlIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KSIgY2xhc3M9InN0MCIgY3g9IjQyMC41IiBjeT0iNjcuOSIgcng9IjYzIiByeT0iNTEuOCIvPjxkZWZzPjxlbGxpcHNlIGlkPSJTVkdJRF81XyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpIiBjeD0iNDIwLjUiIGN5PSI2Ny45IiByeD0iNjMiIHJ5PSI1MS44Ii8+PC9kZWZzPjxjbGlwUGF0aCBpZD0iU1ZHSURfNl8iPjx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzVfIiBvdmVyZmxvdz0idmlzaWJsZSIvPjwvY2xpcFBhdGg+PGcgY2xhc3M9InN0MyI+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgY2xhc3M9InN0MCIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjxkZWZzPjxwYXRoIGlkPSJTVkdJRF83XyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzhfIj48dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF83XyIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxnIGNsYXNzPSJzdDQiPjxlbGxpcHNlIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KSIgY2xhc3M9InN0NSIgY3g9IjQyMC41IiBjeT0iNjcuOSIgcng9IjYzIiByeT0iNTEuOCIvPjwvZz48cGF0aCB0cmFuc2Zvcm09InJvdGF0ZSgtMzcgNDIwLjc5OSA2OC44MDIpIiBjbGFzcz0ic3Q2IiBkPSJNMzU3LjggMTdoMTI1Ljl2MTAzLjdIMzU3Ljh6Ii8+PGVsbGlwc2UgdHJhbnNmb3JtPSJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpIiBjbGFzcz0ic3Q3IiBjeD0iNDIwLjUiIGN5PSI2Ny45IiByeD0iNjMiIHJ5PSI1MS44Ii8+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgY2xhc3M9InN0MCIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjxkZWZzPjxwYXRoIGlkPSJTVkdJRF85XyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzEwXyI+PHVzZSB4bGluazpocmVmPSIjU1ZHSURfOV8iIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48ZyBjbGFzcz0ic3Q4Ij48ZWxsaXBzZSB0cmFuc2Zvcm09InJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OCkiIGNsYXNzPSJzdDUiIGN4PSI0MjAuNSIgY3k9IjY3LjkiIHJ4PSI2MyIgcnk9IjUxLjgiLz48L2c+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgY2xhc3M9InN0OSIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjgyIDY4LjM1MykiIGNsYXNzPSJzdDciIGQ9Ik0zMzAuOS0xNC4yaDE3OS44djE2NS4xSDMzMC45eiIvPjwvZz48ZWxsaXBzZSB0cmFuc2Zvcm09InJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OCkiIGNsYXNzPSJzdDciIGN4PSI0MjAuNSIgY3k9IjY3LjkiIHJ4PSI2MyIgcnk9IjUxLjgiLz48cGF0aCBkPSJNMzkyLjQgNjEuM2wxMC03IDEyLjMgMTcuNWMyLjEgMi44IDMuNyA1LjggNC45IDkuMS43IDIuNS41IDUuMi0uNSA3LjYtMS4zIDMtMy40IDUuNS02LjIgNy4zLTMuMyAyLjMtNi4xIDMuNi04LjUgNC0yLjMuNC00LjcgMC02LjktMS0yLjQtMS4yLTQuNS0yLjktNi4xLTUuMWw4LjYtOGMuNyAxLjEgMS42IDIuMSAyLjYgMi45LjcuNSAxLjUuOCAyLjQuOC43IDAgMS40LS4zIDEuOS0uNyAxLS42IDEuNy0xLjggMS42LTMtLjMtMS43LTEtMy40LTIuMS00LjdsLTE0LTE5Ljd6bTMwIDExLjFsOS4xLTcuMmMxIDEuMiAyLjMgMi4xIDMuNyAyLjYgMiAuNiA0LjEuMiA1LjgtMS4xIDEuMi0uOCAyLjItMS45IDIuNi0zLjMuNi0xLjgtLjQtMy44LTIuMi00LjQtLjMtLjEtLjYtLjItLjktLjItMS4yLS4xLTMuMy40LTYuNCAxLjctNS4xIDIuMS05LjEgMi45LTEyLjEgMi42LTIuOS0uMy01LjYtMS44LTcuMi00LjMtMS4yLTEuNy0xLjgtMy43LTEuOS01LjcgMC0yLjMuNi00LjYgMS45LTYuNSAxLjktMi43IDQuMi01IDctNi44IDQuMi0yLjkgNy45LTQuMyAxMS4xLTQuMyAzLjIgMCA2LjIgMS41IDkgNC42bC05IDcuMWMtMS44LTIuMy01LjItMi44LTcuNS0xbC0uMy4zYy0xIC42LTEuNyAxLjUtMi4xIDIuNi0uMy44LS4xIDEuNy40IDIuNC40LjUgMSAuOSAxLjcuOS44LjEgMi4yLS4zIDQuMi0xLjIgNS0yLjEgOC44LTMuMyAxMS40LTMuNyAyLjItLjQgNC41LS4yIDYuNi43IDEuOS44IDMuNSAyLjIgNC42IDMuOSAxLjQgMiAyLjIgNC40IDIuMyA2LjkuMSAyLjYtLjYgNS4xLTIgNy4zLTEuOCAyLjctNC4xIDUtNi44IDYuOC01LjUgMy44LTEwIDUuNC0xMy42IDQuOC0zLjktLjYtNy4xLTIuNi05LjQtNS41eiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";

/***/ }),

/***/ 557:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA5MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzUzXzE0MCkiPgo8cGF0aCBkPSJNNTUuMDQzOSAwLjYyODYzNkM1Mi45ODc3IC0wLjM0OTI0NSA1MC43NzMzIC0wLjE4NjI2IDQ4Ljg3NTIgMS4xMTc1OEwyMy43MjU4IDIwLjE4NjNINS44NTIzN0MyLjY4ODkyIDIwLjE4NjMgMCAyMi45NTY5IDAgMjYuMjE2NVY1My41OTcyQzAgNTYuODU2OCAyLjY4ODkyIDU5LjYyNzUgNS44NTIzNyA1OS42Mjc1SDIzLjU2NzdMNDguODc1MiA3OC44NTkxQzQ5Ljk4MjQgNzkuNjc0IDUxLjA4OTYgODAgNTIuMzU1IDgwQzUzLjMwNCA4MCA1NC4wOTQ5IDc5LjgzNyA1NS4wNDM5IDc5LjM0ODFDNTYuOTQyIDc4LjM3MDIgNTguMjA3NCA3Ni4yNTE1IDU4LjIwNzQgNzMuOTY5N1Y2LjAwNjk5QzU4LjIwNzQgMy43MjUyNiA1Ny4xMDAyIDEuNjA2NTIgNTUuMDQzOSAwLjYyODYzNloiIGZpbGw9IiNGRkM3MDAiLz4KPHBhdGggZD0iTTYzLjI2OSA0OC4zODE4QzYyLjMxOTkgNDguMzgxOCA2MS42ODczIDQ5LjAzMzcgNjEuNjg3MyA1MC4wMTE2QzYxLjY4NzMgNTAuOTg5NSA2Mi4zMTk5IDUxLjY0MTQgNjMuMjY5IDUxLjY0MTRDNjkuNTk1OSA1MS42NDE0IDc0LjY1NzQgNDYuNDI2MSA3NC42NTc0IDM5LjkwNjhDNzQuNjU3NCAzMy4zODc2IDY5LjU5NTkgMjguMTcyMyA2My4yNjkgMjguMTcyM0M2Mi4zMTk5IDI4LjE3MjMgNjEuNjg3MyAyOC44MjQyIDYxLjY4NzMgMjkuODAyMUM2MS42ODczIDMwLjc4IDYyLjMxOTkgMzEuNDMxOSA2My4yNjkgMzEuNDMxOUM2Ny44NTYgMzEuNDMxOSA3MS40OTM5IDM1LjE4MDQgNzEuNDkzOSAzOS45MDY4QzcxLjQ5MzkgNDQuNjMzMyA2Ny44NTYgNDguMzgxOCA2My4yNjkgNDguMzgxOFoiIGZpbGw9IiNGRkM3MDAiLz4KPHBhdGggZD0iTTYzLjI2OSA1OS43OTA1QzczLjg2NjUgNTkuNzkwNSA4Mi41NjYgNTAuODI2NSA4Mi41NjYgMzkuOTA2OUM4Mi41NjYgMjguOTg3MiA3My44NjY1IDIwLjAyMzMgNjMuMjY5IDIwLjAyMzNDNjIuMzE5OSAyMC4wMjMzIDYxLjY4NzMgMjAuNjc1MiA2MS42ODczIDIxLjY1MzFDNjEuNjg3MyAyMi42MzEgNjIuMzE5OSAyMy4yODI5IDYzLjI2OSAyMy4yODI5QzcyLjEyNjYgMjMuMjgyOSA3OS40MDI1IDMwLjc4IDc5LjQwMjUgMzkuOTA2OUM3OS40MDI1IDQ5LjAzMzggNzIuMTI2NiA1Ni41MzA4IDYzLjI2OSA1Ni41MzA4QzYyLjMxOTkgNTYuNTMwOCA2MS42ODczIDU3LjE4MjggNjEuNjg3MyA1OC4xNjA2QzYxLjY4NzMgNTkuMTM4NSA2Mi40NzgxIDU5Ljc5MDUgNjMuMjY5IDU5Ljc5MDVaIiBmaWxsPSIjRkZDNzAwIi8+CjxwYXRoIGQ9Ik02My4yNjkgMTIuNTI2MkM2Mi4zMTk5IDEyLjUyNjIgNjEuNjg3MyAxMy4xNzgyIDYxLjY4NzMgMTQuMTU2QzYxLjY4NzMgMTUuMTMzOSA2Mi4zMTk5IDE1Ljc4NTggNjMuMjY5IDE1Ljc4NThDNzYuMjM5MSAxNS43ODU4IDg2LjgzNjYgMjYuNzA1NSA4Ni44MzY2IDQwLjA2OTlDODYuODM2NiA1My40MzQzIDc2LjIzOTEgNjQuMzUzOSA2My4yNjkgNjQuMzUzOUM2Mi4zMTk5IDY0LjM1MzkgNjEuNjg3MyA2NS4wMDU5IDYxLjY4NzMgNjUuOTgzN0M2MS42ODczIDY2Ljk2MTYgNjIuMzE5OSA2Ny42MTM1IDYzLjI2OSA2Ny42MTM1Qzc3Ljk3OSA2Ny42MTM1IDkwLjAwMDEgNTUuMjI3MSA5MC4wMDAxIDQwLjA2OTlDOTAuMDAwMSAyNC43NDk4IDc3Ljk3OSAxMi41MjYyIDYzLjI2OSAxMi41MjYyWiIgZmlsbD0iI0ZGQzcwMCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzUzXzE0MCI+CjxyZWN0IHdpZHRoPSI5MCIgaGVpZ2h0PSI4MCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";

/***/ }),

/***/ 286:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/en-icon.png";

/***/ }),

/***/ 60:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/falco.jpg";

/***/ }),

/***/ 418:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/github-logo.png";

/***/ }),

/***/ 304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/hidden-bird.jpg";

/***/ }),

/***/ 628:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/jumping-bird.png";

/***/ }),

/***/ 200:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/logo.png";

/***/ }),

/***/ 681:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/results.png";

/***/ }),

/***/ 50:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/start-page.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./src/utils/html-to-element.js
/* harmony default export */ function html_to_element(htmlString) {
  const template = document.createElement("template");
  template.innerHTML = htmlString;
  return template.content.firstChild;
}
// EXTERNAL MODULE: ./node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(91);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./src/components/header/index.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(200), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(286), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = getUrl_default()(___HTML_LOADER_IMPORT_1___);
var code = "<header class=\"header\">\n    <h1 class=\"h1\">Songbird</h1>\n    <div class=\"header__wrapper\">\n        <a class=\"logo header__logo\" href=\"\">\n            <img class=\"logo__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Songbird logo\">\n        </a>\n        <nav class=\"nav\">\n            <ul class=\"menu\">\n                <il class=\"menu__item menu__link_active\" id=\"menu-link-start\">Начало</il>\n                <il class=\"menu__item\" id=\"menu-link-play\">Играть</il>\n                <il class=\"menu__item\" id=\"menu-link-gallery\">Галлерея</il>\n                <il class=\"menu__item menu__language\">\n                    <img class=\"menu__lg\" id=\"menu-link-lg\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"english flag icon\">\n                </il>\n            </ul>\n        </nav>\n    </div>\n</header>";
// Exports
/* harmony default export */ const header = (code);
;// CONCATENATED MODULE: ./src/components/header/index.js



const header_header = html_to_element(header);
/* harmony default export */ const components_header = (header_header);
;// CONCATENATED MODULE: ./src/pages/game-page/index.html
// Imports

var game_page_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(304), __webpack_require__.b);
var game_page_HTML_LOADER_IMPORT_1_ = new URL(/* asset import */ __webpack_require__(181), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(557), __webpack_require__.b);
// Module
var game_page_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(game_page_HTML_LOADER_IMPORT_0_);
var game_page_HTML_LOADER_REPLACEMENT_1_ = getUrl_default()(game_page_HTML_LOADER_IMPORT_1_);
var ___HTML_LOADER_REPLACEMENT_2___ = getUrl_default()(___HTML_LOADER_IMPORT_2___);
var game_page_code = "<section class=\"questions section\">\n  <div class=\"questions__wrapper\">\n    <button class=\"questions__category questions__category_current\" id=\"cat-0\">Разминка</button>\n    <button class=\"questions__category\" id=\"cat-1\">Воробьиные</button>\n    <button class=\"questions__category\" id=\"cat-2\">Лесные птицы</button>\n    <button class=\"questions__category\" id=\"cat-3\">Певчие птицы</button>\n    <button class=\"questions__category\" id=\"cat-4\">Хищные птицы</button>\n    <button class=\"questions__category\" id=\"cat-5\">Морские птицы</button>\n    <div class=\"questions__result result\">\n      <span class=\"result__title\" id=\"result-title\">Счет</span>\n      <span class=\"result__counter\" id=\"result-counter\">0</span>\n    </div>\n  </div>\n  <div class=\"field__wrapper game\">\n    <div class=\"game__qstn\">\n      <img class=\"game__qstn_img\" id=\"qstn-img\" src=\"" + game_page_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"Black and white cartoon bird\">\n      <div class=\"game__qstn_content\">\n        <span class=\"game__qstn_name\" id=\"qstn-name\">******</span>\n        <span class=\"game__qstn_line\"></span>\n        <div class=\"game__qstn_audio\">\n          <div class=\"player__wrapper\">\n            <img class=\"player__btn btn-play\" id=\"btn-play\" src=\"" + game_page_HTML_LOADER_REPLACEMENT_1_ + "\">\n            <div class=\"audio__wrapper\">\n              <audio  class=\"audio__sound audio\" id=\"qstn-audio\" preload=\"metadata\"\n                            src=\"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3\">\n              </audio>\n              <span class=\"audio__time\" id=\"audio-time\">0:00</span>\n              <input class=\"audio__range\" id=\"qstn-audio-range\" type=\"range\" max=\"10\" value=\"0\">\n              <span class=\"audio__duration\" id=\"audio-total\">0:00</span>\n            </div>\n          </div>\n          <div class=\"volume__wrapper\">\n            <img class=\"audio__volume volume-up\" id=\"qstn-btn-volume\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\">\n            <div class=\"volume__wrapper_range\">\n              <input class=\"audio__volume_range\" id=\"qstn-volume-range\" type=\"range\" step=\"0.1\" min=\"0\" max=\"1\" value=\"1\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"game__answers answers\">\n      <div class=\"answers__variants\">\n          <div class=\"answers__item\">\n            <input class=\"answers__item_input\" id=\"0\" type=\"checkbox\" name=\"bird\" value=\"\">\n            <label class=\"answers__item_label\" for=\"0\" id=\"bird-0\"></label>\n          </div>\n          <div class=\"answers__item\">\n            <input class=\"answers__item_input\" id=\"1\" type=\"checkbox\" name=\"bird\" value=\"\">\n            <label class=\"answers__item_label\" for=\"1\" id=\"bird-1\"></label>\n          </div>\n          <div class=\"answers__item\">\n            <input class=\"answers__item_input\" id=\"2\" type=\"checkbox\" name=\"bird\" value=\"\">\n            <label class=\"answers__item_label\" for=\"2\" id=\"bird-2\"></label>\n          </div>\n          <div class=\"answers__item\">\n            <input class=\"answers__item_input\" id=\"3\" type=\"checkbox\" name=\"bird\" value=\"\">\n            <label class=\"answers__item_label\" for=\"3\" id=\"bird-3\"></label>\n          </div>\n          <div class=\"answers__item\">\n            <input class=\"answers__item_input\" id=\"4\" type=\"checkbox\" name=\"bird\" value=\"\">\n            <label class=\"answers__item_label\" for=\"4\" id=\"bird-4\"></label>\n          </div>\n          <div class=\"answers__item answers__item_last\">\n            <input class=\"answers__item_input\" id=\"5\" type=\"checkbox\" name=\"bird\" value=\"\">\n            <label class=\"answers__item_label\" for=\"5\" id=\"bird-5\"></label>\n          </div>\n      </div>\n      <div class=\"answers__description bird\">\n        <div class=\"bird__info hidden\" id=\"bird-info\">\n          <img class=\"bird__img\" id = \"bird-img\" src=\"#\">\n          <div class=\"bird__info_wrapper\">\n            <h3 class=\"bird__title\" id = \"bird-name\"></h3>\n            <span class=\"bird__latin-name\" id = \"bird-name-latin\"></span>\n            <div class=\"bird__audio\">\n              <div class=\"bird__audio_wrapper\">\n                <img class=\"bird__audio__btn bird__btn-play\" id=\"bird-btn-play\" src=\"" + game_page_HTML_LOADER_REPLACEMENT_1_ + "\">\n                <div class=\"bird__audio_line\">\n                  <audio class=\"bird__audio_player audio\" id=\"bird-audio\" src=\"#\"></audio>\n                  <input class=\"audio__range bird__audio_range\" id=\"bird-audio-range\" type=\"range\" max=\"100\" value=\"0\">\n                  <div class = \"bird__audio_timer\">\n                    <span class=\"bird__audio_time\" id=\"bird-audio-time\">0:00</span>\n                    <span class=\"bird__audio_duration\" id=\"bird-audio-total\">0:00</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"bird__volume\">\n                <img class=\"bird__volume_img bird__volume-up\" id=\"bird-btn-volume\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\">\n                <div class=\"bird__volume_wrapper\">\n                  <input class=\"audio__volume_range bird__volume_range\" id=\"bird-volume-range\" type=\"range\" step=\"0.1\" min=\"0\" max=\"1\" value=\"1\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <p class=\"bird__text hidden\" id =\"bird-text\"></p>\n        <span class=\"bird__text-initial\" id=\"bird-text-initial\"><em>Прослушайте песню </br> и попробуйте угадать птицу, выбрав её имя из списка!</em></span>\n      </div>\n    </div>\n    <button class=\"game__qstn-next disabled\" id=\"btn-next\" disabled>Следующий уровень</button>\n  </div>\n</section>";
// Exports
/* harmony default export */ const game_page = (game_page_code);
;// CONCATENATED MODULE: ./src/pages/game-page/index.js



const gameSection = html_to_element(game_page);
/* harmony default export */ const pages_game_page = (gameSection);
;// CONCATENATED MODULE: ./src/components/footer/index.html
// Imports

var footer_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(201), __webpack_require__.b);
var footer_HTML_LOADER_IMPORT_1_ = new URL(/* asset import */ __webpack_require__(418), __webpack_require__.b);
// Module
var footer_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(footer_HTML_LOADER_IMPORT_0_);
var footer_HTML_LOADER_REPLACEMENT_1_ = getUrl_default()(footer_HTML_LOADER_IMPORT_1_);
var footer_code = "<footer class=\"footer\">\n  <div class=\"footer__wrapper\">\n    <a class=\"footer__rs-link\" href=\"https://rs.school/js/\">\n      <img class=\"footer__rs-logo\" src=\"" + footer_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"RS School logo\">\n    </a>\n    <div class=\"copyright\">\n      <a class=\"copyright__link\" href=\"https://github.com/elukashova\">\n        <img class=\"copyright__logo\" src=\"" + footer_HTML_LOADER_REPLACEMENT_1_ + "\" alt=\"github logo\">\n      </a>\n      <span class=\"copyright__year\">2022</span>\n    </div>\n  </div>\n</footer>";
// Exports
/* harmony default export */ const footer = (footer_code);
;// CONCATENATED MODULE: ./src/components/footer/index.js



const footer_footer = html_to_element(footer);
/* harmony default export */ const components_footer = (footer_footer);
;// CONCATENATED MODULE: ./src/pages/results-page/index.html
// Imports

var results_page_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(681), __webpack_require__.b);
// Module
var results_page_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(results_page_HTML_LOADER_IMPORT_0_);
var results_page_code = "<section class=\"results section\">\n  <div class=\"results__wrapper\">\n    <img class=\"results__image\" id=\"results-img\" src=\"" + results_page_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"Black and white cartoon bird\">\n    <div class=\"results__text-wrapper\">\n      <span class=\"results__congrats\" id=\"results-congrats\">Поздравляю!</span>\n      <div class=\"results__text_score\">\n        <span class=\"results__text\" id=\"results-text\">Ваш результат:</span>\n        <span class=\"results__score\" id=\"results-score\">0!</span>\n      </div>\n      <span class=\"results__congrats-max\" id=\"results-max\">Это максимальный балл :)</span>\n      <div class=\"results__cta\" id=\"results-cta\">\n        <span class=\"results__invitation\" id=\"invitation-qstn\">Хотите пройти игру еще раз?</span>\n        <button class=\"results__btn\" id=\"results-btn\">Играть</button>\n      </div>\n    </div>\n  </div>\n</section>";
// Exports
/* harmony default export */ const results_page = (results_page_code);
;// CONCATENATED MODULE: ./src/pages/results-page/index.js



const resultsPage = html_to_element(results_page);
/* harmony default export */ const pages_results_page = (resultsPage);
;// CONCATENATED MODULE: ./src/pages/gallery-page/index.html
// Imports

var gallery_page_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(250), __webpack_require__.b);
var gallery_page_HTML_LOADER_IMPORT_1_ = new URL(/* asset import */ __webpack_require__(60), __webpack_require__.b);
var gallery_page_HTML_LOADER_IMPORT_2_ = new URL(/* asset import */ __webpack_require__(181), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(557), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(182), __webpack_require__.b);
// Module
var gallery_page_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(gallery_page_HTML_LOADER_IMPORT_0_);
var gallery_page_HTML_LOADER_REPLACEMENT_1_ = getUrl_default()(gallery_page_HTML_LOADER_IMPORT_1_);
var gallery_page_HTML_LOADER_REPLACEMENT_2_ = getUrl_default()(gallery_page_HTML_LOADER_IMPORT_2_);
var ___HTML_LOADER_REPLACEMENT_3___ = getUrl_default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = getUrl_default()(___HTML_LOADER_IMPORT_4___);
var gallery_page_code = "<section class=\"gallery\">\n  <div class=\"gallery__categories\">\n    <button class=\"gallery__category gallery__category_current\" id=\"gal-cat-0\">Без категории</button>\n    <button class=\"gallery__category \" id=\"gal-cat-1\">Воробьиные</button>\n    <button class=\"gallery__category\" id=\"gal-cat-2\">Лесные птицы</button>\n    <button class=\"gallery__category\" id=\"gal-cat-3\">Певчие птицы</button>\n    <button class=\"gallery__category\" id=\"gal-cat-4\">Хищные птицы</button>\n    <button class=\"gallery__category\" id=\"gal-cat-5\">Морские птицы</button>\n  </div>\n  <div class=\"gallery__scroll\">\n    <img class=\"gallery__scroll_left disabled\" id=\"scroll-left\" src=\"" + gallery_page_HTML_LOADER_REPLACEMENT_0_ + "\">\n    <div class=\"gallery__wrapper\">\n      <div class=\"gallery__card card\">\n        <div class=\"card__info\">\n          <img class=\"card__img\" src=\"" + gallery_page_HTML_LOADER_REPLACEMENT_1_ + "\">\n          <div class=\"card__info_wrapper\">\n            <div class=\"card__info_text\">\n              <h3 class=\"card__title\"></h3>\n              <span class=\"card__latin-name\"></span>\n            </div>\n            <div class=\"card__audio\">\n              <div class=\"card__audio_wrapper\">\n                <img class=\"card__audio__btn card__btn-play\" src=\"" + gallery_page_HTML_LOADER_REPLACEMENT_2_ + "\">\n                <div class=\"card__audio_line\">\n                  <audio class=\"card__audio_player audio\" src=\"#\"></audio>\n                  <input class=\"audio__range card__audio_range\" type=\"range\" max=\"100\" value=\"0\">\n                  <div class = \"card__audio_timer\">\n                    <span class=\"card__audio_time\"></span>\n                    <span class=\"card__audio_duration\"></span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card__volume\">\n                <img class=\"card__volume_img card__volume-up\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\">\n                <div class=\"card__volume_wrapper\">\n                  <input class=\"audio__volume_range card__volume_range\" type=\"range\" step=\"0.1\" min=\"0\" max=\"1\" value=\"1\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <p class=\"card__text\"></p>\n      </div>\n      <div class=\"gallery__card card\">\n        <div class=\"card__info\">\n          <img class=\"card__img\" src=\"" + gallery_page_HTML_LOADER_REPLACEMENT_1_ + "\">\n          <div class=\"card__info_wrapper\">\n            <div class=\"card__info_text\">\n              <h3 class=\"card__title\"></h3>\n              <span class=\"card__latin-name\"></span>\n            </div>\n            <div class=\"card__audio\">\n              <div class=\"card__audio_wrapper\">\n                <img class=\"card__audio__btn card__btn-play\"src=\"" + gallery_page_HTML_LOADER_REPLACEMENT_2_ + "\">\n                <div class=\"card__audio_line\">\n                  <audio class=\"card__audio_player audio\" src=\"#\"></audio>\n                  <input class=\"audio__range card__audio_range\" type=\"range\" max=\"100\" value=\"0\">\n                  <div class = \"card__audio_timer\">\n                    <span class=\"card__audio_time\"></span>\n                    <span class=\"card__audio_duration\"></span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card__volume\">\n                <img class=\"card__volume_img card__volume-up\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\">\n                <div class=\"card__volume_wrapper\">\n                  <input class=\"audio__volume_range card__volume_range\" type=\"range\" step=\"0.1\" min=\"0\" max=\"1\" value=\"1\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <p class=\"card__text\"></p>\n      </div>\n      <div class=\"gallery__card card\">\n        <div class=\"card__info\">\n          <img class=\"card__img\" src=\"" + gallery_page_HTML_LOADER_REPLACEMENT_1_ + "\">\n          <div class=\"card__info_wrapper\">\n            <div class=\"card__info_text\">\n              <h3 class=\"card__title\"></h3>\n              <span class=\"card__latin-name\"></span>\n            </div>\n            <div class=\"card__audio\">\n              <div class=\"card__audio_wrapper\">\n                <img class=\"card__audio__btn card__btn-play\" src=\"" + gallery_page_HTML_LOADER_REPLACEMENT_2_ + "\">\n                <div class=\"card__audio_line\">\n                  <audio class=\"card__audio_player audio\" src=\"#\"></audio>\n                  <input class=\"audio__range card__audio_range\" type=\"range\" max=\"100\" value=\"0\">\n                  <div class = \"card__audio_timer\">\n                    <span class=\"card__audio_time\"></span>\n                    <span class=\"card__audio_duration\"></span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card__volume\">\n                <img class=\"card__volume_img card__volume-up\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\">\n                <div class=\"card__volume_wrapper\">\n                  <input class=\"audio__volume_range card__volume_range\" type=\"range\" step=\"0.1\" min=\"0\" max=\"1\" value=\"1\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <p class=\"card__text\"></p>\n      </div>\n      <div class=\"gallery__card card\">\n        <div class=\"card__info\">\n          <img class=\"card__img\" src=\"" + gallery_page_HTML_LOADER_REPLACEMENT_1_ + "\">\n          <div class=\"card__info_wrapper\">\n            <div class=\"card__info_text\">\n              <h3 class=\"card__title\"></h3>\n              <span class=\"card__latin-name\"></span>\n            </div>\n            <div class=\"card__audio\">\n              <div class=\"card__audio_wrapper\">\n                <img class=\"card__audio__btn card__btn-play\" src=\"" + gallery_page_HTML_LOADER_REPLACEMENT_2_ + "\">\n                <div class=\"card__audio_line\">\n                  <audio class=\"card__audio_player audio\" src=\"#\"></audio>\n                  <input class=\"audio__range card__audio_range\" type=\"range\" max=\"100\" value=\"0\">\n                  <div class = \"card__audio_timer\">\n                    <span class=\"card__audio_time\"></span>\n                    <span class=\"card__audio_duration\"></span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card__volume\">\n                <img class=\"card__volume_img card__volume-up\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\">\n                <div class=\"card__volume_wrapper\">\n                  <input class=\"audio__volume_range card__volume_range\" type=\"range\" step=\"0.1\" min=\"0\" max=\"1\" value=\"1\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <p class=\"card__text\"></p>\n      </div>\n      <div class=\"gallery__card card\">\n        <div class=\"card__info\">\n          <img class=\"card__img\" src=\"" + gallery_page_HTML_LOADER_REPLACEMENT_1_ + "\">\n          <div class=\"card__info_wrapper\">\n            <div class=\"card__info_text\">\n              <h3 class=\"card__title\"></h3>\n              <span class=\"card__latin-name\"></span>\n            </div>\n            <div class=\"card__audio\">\n              <div class=\"card__audio_wrapper\">\n                <img class=\"card__audio__btn card__btn-play\" src=\"" + gallery_page_HTML_LOADER_REPLACEMENT_2_ + "\">\n                <div class=\"card__audio_line\">\n                  <audio class=\"card__audio_player audio\" src=\"#\"></audio>\n                  <input class=\"audio__range card__audio_range\" type=\"range\" max=\"100\" value=\"0\">\n                  <div class = \"card__audio_timer\">\n                    <span class=\"card__audio_time\"></span>\n                    <span class=\"card__audio_duration\"></span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card__volume\">\n                <img class=\"card__volume_img card__volume-up\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\">\n                <div class=\"card__volume_wrapper\">\n                  <input class=\"audio__volume_range card__volume_range\" type=\"range\" step=\"0.1\" min=\"0\" max=\"1\" value=\"1\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <p class=\"card__text\"></p>\n      </div>\n      <div class=\"gallery__card card\">\n        <div class=\"card__info\">\n          <img class=\"card__img\" src=\"" + gallery_page_HTML_LOADER_REPLACEMENT_1_ + "\">\n          <div class=\"card__info_wrapper\">\n            <div class=\"card__info_text\">\n              <h3 class=\"card__title\"></h3>\n              <span class=\"card__latin-name\"></span>\n            </div>\n            <div class=\"card__audio\">\n              <div class=\"card__audio_wrapper\">\n                <img class=\"card__audio__btn card__btn-play\" src=\"" + gallery_page_HTML_LOADER_REPLACEMENT_2_ + "\">\n                <div class=\"card__audio_line\">\n                  <audio class=\"card__audio_player audio\" src=\"#\"></audio>\n                  <input class=\"audio__range card__audio_range\" type=\"range\" max=\"100\" value=\"0\">\n                  <div class = \"card__audio_timer\">\n                    <span class=\"card__audio_time\"></span>\n                    <span class=\"card__audio_duration\"></span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card__volume\">\n                <img class=\"card__volume_img card__volume-up\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\">\n                <div class=\"card__volume_wrapper\">\n                  <input class=\"audio__volume_range card__volume_range\" type=\"range\" step=\"0.1\" min=\"0\" max=\"1\" value=\"1\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <p class=\"card__text\"></p>\n      </div>\n    </div>\n    <img class=\"gallery__scroll_right\" id=\"scroll-right\" src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\">\n  </div>\n</section>";
// Exports
/* harmony default export */ const gallery_page = (gallery_page_code);
;// CONCATENATED MODULE: ./src/pages/gallery-page/index.js



const galleryPage = html_to_element(gallery_page);
/* harmony default export */ const pages_gallery_page = (galleryPage);
;// CONCATENATED MODULE: ./src/pages/start-page/index.html
// Imports

var start_page_HTML_LOADER_IMPORT_0_ = new URL(/* asset import */ __webpack_require__(50), __webpack_require__.b);
var start_page_HTML_LOADER_IMPORT_1_ = new URL(/* asset import */ __webpack_require__(628), __webpack_require__.b);
// Module
var start_page_HTML_LOADER_REPLACEMENT_0_ = getUrl_default()(start_page_HTML_LOADER_IMPORT_0_);
var start_page_HTML_LOADER_REPLACEMENT_1_ = getUrl_default()(start_page_HTML_LOADER_IMPORT_1_);
var start_page_code = "<section class=\"start section\">\n  <div class=\"start__images\">\n    <img class=\"start__image-tree\" id=\"start-img\" src=\"" + start_page_HTML_LOADER_REPLACEMENT_0_ + "\" alt=\"Рисунок ствола дерева с зелеными листьями\">\n    <img class=\"start__image-bird\" src=\"" + start_page_HTML_LOADER_REPLACEMENT_1_ + "\" alt=\"Рисунок сине-голубой птицы\">\n    <div class=\"start__music-notes\">\n      <div class=\"start__music-note1\">&#9833</div>\n      <div class=\"start__music-note2\">&#9835; &#9834</div>\n      <div class=\"start__music-note3\">&#9834</div>\n    </div>\n  </div>\n  <div class=\"start__wrapper\">\n      <span class=\"start__text\" id=\"start-text\">Любите пение птичек в любое время суток? </br>\n        Считаете себя знатоком птичьих звонких рулад? </br>\n        Просто скучаете и не знаете, как занять время? </br>\n        Тогда добро пожаловать в увлекательный мир Songbird! </br>\n        Давайте проверим, с какой ноты вы сможете угадать мелодию :)</span>\n      </span>\n    <button class=\"start__button\" id=\"start-btn\">Играть</button>\n  </div>\n</section>";
// Exports
/* harmony default export */ const start_page = (start_page_code);
;// CONCATENATED MODULE: ./src/pages/start-page/index.js



const startPage = html_to_element(start_page);
/* harmony default export */ const pages_start_page = (startPage);
;// CONCATENATED MODULE: ./src/pages/game-page/audio-player.js
function playAudio(playBtn, aRange, aPlayed, aTotal, vRange, a, volBtn, sounds) {
  let isPlaying = false;
  //play audio
  playBtn.addEventListener("click", () => {
    if (playBtn.id != "btn-play" && playBtn.id != "bird-btn-play") {
      if (!isPlaying) {
        pauseSounds(sounds);
        playAudio(a);
      } else {
        pauseAudio(a);
      }
    } else {
      if (!isPlaying) {
        playAudio(a);
      } else {
        pauseAudio(a);
      }
    }
  });
  async function playAudio(a) {
    try {
      await a.play();
    } catch (err) {
      console.log(err);
    }
  }
  const pauseAudio = a => {
    isPlaying = false;
    a.pause();
  };

  //change play button
  a.addEventListener("play", () => {
    playBtn.src = "assets/icons/pause-btn.svg";
    isPlaying = true;
  });
  a.addEventListener("pause", () => {
    playBtn.src = "assets/icons/play-btn.svg";
    isPlaying = false;
  });

  //on audio end
  a.addEventListener("ended", () => {
    a.currentTime = 0;
  });

  //show progress
  const showProgress = input => {
    if (input === aRange) {
      aRange.style.setProperty("--progress-width", aRange.value / aRange.max * 100 + '%');
    } else {
      vRange.style.setProperty("--progress-width", vRange.value / vRange.max * 100 + '%');
    }
  };

  //calculate time
  const calcTime = secs => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    const finalS = s < 10 ? `0${s}` : `${s}`;
    return `${m}:${finalS}`;
  };
  a.addEventListener("loadeddata", () => {
    showProgress(aRange);
  });

  //track time
  a.addEventListener("loadedmetadata", () => {
    showProgress(aRange);
    aPlayed.innerHTML = calcTime(0);
    aTotal.innerHTML = calcTime(a.duration);
    aRange.max = Math.floor(a.duration);
    let changedTime = false;
    aRange.addEventListener("input", () => {
      showProgress(aRange);
      a.currentTime = aRange.value;
      changedTime = false;
    });
    aRange.addEventListener("change", () => {
      showProgress(aRange);
      a.currentTime = aRange.value;
      if (!a.paused) {
        a.play();
      }
      changedTime = false;
    });
    a.addEventListener("timeupdate", () => {
      if (!changedTime) {
        aRange.value = Math.floor(a.currentTime);
        aRange.setAttribute("value", aRange.value);
        showProgress(aRange);
        aPlayed.innerHTML = calcTime(aRange.value);
      }
    });
  });
  //volume
  vRange.addEventListener("change", () => {
    volume();
    vRange.setAttribute("value", vRange.value);
  });
  vRange.addEventListener("input", () => {
    volume();
    vRange.setAttribute("value", vRange.value);
  });
  const aIcon = input => {
    if (input.value > 0 && input.value <= 0.4) {
      volBtn.src = "assets/icons/volume-low.svg";
    } else if (input.value > 0.4 && input.value <= 0.9) {
      volBtn.src = "assets/icons/volume-mid.svg";
    } else if (input.value == 0) {
      volBtn.src = "assets/icons/volume-off.svg";
    } else {
      volBtn.src = "assets/icons/volume-up.svg";
    }
  };
  let soundOn = true;
  let temp;
  volBtn.addEventListener("click", () => {
    if (vRange.value > 0) {
      temp = vRange.value;
    }
    soundOn = !soundOn;
    if (soundOn === false) {
      vRange.value = 0;
      volume();
    } else {
      vRange.value = temp;
      volume();
    }
  });
  const volume = () => {
    a.volume = vRange.value;
    aIcon(vRange);
    showProgress(vRange);
  };
}

//pause other sounds while playing
const pauseSounds = sounds => {
  sounds.forEach(sound => {
    sound.pause();
  });
};
;// CONCATENATED MODULE: ./src/pages/game-page/birds-data.js
const birdsData = [[{
  id: 1,
  name: 'Ворон',
  species: 'Corvus corax',
  description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
  image: 'assets/img/corvus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
}, {
  id: 2,
  name: 'Журавль',
  species: 'Grus grus',
  description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
  image: 'assets/img/grus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
}, {
  id: 3,
  name: 'Ласточка',
  species: 'Delichon urbicum',
  description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
  image: 'assets/img/delichon.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
}, {
  id: 4,
  name: 'Козодой',
  species: 'Caprimulgus europaeus',
  description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
  image: 'assets/img/caprimulgus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
}, {
  id: 5,
  name: 'Кукушка',
  species: 'Cuculus canorus',
  description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
  image: 'assets/img/cuculus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
}, {
  id: 6,
  name: 'Синица',
  species: 'Parus major',
  description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
  image: 'assets/img/parus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
}], [{
  id: 1,
  name: 'Воробей',
  species: 'Passer domesticus',
  description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
  image: 'assets/img/passer.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
}, {
  id: 2,
  name: 'Грач',
  species: 'Corvus frugilegus',
  description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
  image: 'assets/img/corvus-2.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
}, {
  id: 3,
  name: 'Галка',
  species: 'Coloeus monedula',
  description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
  image: 'assets/img/coloeus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
}, {
  id: 4,
  name: 'Певчий дрозд',
  species: 'Turdus philomelos',
  description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
  image: 'assets/img/turdus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
}, {
  id: 5,
  name: 'Сорока',
  species: 'Pica pica',
  description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
  image: 'assets/img/pica.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
}, {
  id: 6,
  name: 'Сойка',
  species: 'Garrulus glandarius',
  description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
  image: 'assets/img/garrulus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
}], [{
  id: 1,
  name: 'Зяблик',
  species: 'Fringilla coelebs',
  description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
  image: 'assets/img/fringilla.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
}, {
  id: 2,
  name: 'Клёст',
  species: 'Loxia curvirostra',
  description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
  image: 'assets/img/loxia.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
}, {
  id: 3,
  name: 'Горлица',
  species: 'Streptopelia turtur',
  description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
  image: 'assets/img/streptopelia.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
}, {
  id: 4,
  name: 'Дятел',
  species: 'Dendrocopos major',
  description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
  image: 'assets/img/dendrocopos.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
}, {
  id: 5,
  name: 'Удод',
  species: 'Upupa epops',
  description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
  image: 'assets/img/upupa.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
}, {
  id: 6,
  name: 'Стриж',
  species: 'Apus apus',
  description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
  image: 'assets/img/apus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
}], [{
  id: 1,
  name: 'Жаворонок',
  species: 'Alauda arvensis',
  description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
  image: 'assets/img/alauda.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
}, {
  id: 2,
  name: 'Соловей',
  species: 'Luscinia luscinia',
  description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
  image: 'assets/img/luscinia.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
}, {
  id: 3,
  name: 'Скворец',
  species: 'Sturnus vulgaris',
  description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
  image: 'assets/img/sturnus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
}, {
  id: 4,
  name: 'Иволга',
  species: 'Oriolus oriolus',
  description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
  image: 'assets/img/oriolus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
}, {
  id: 5,
  name: 'Свиристель',
  species: 'Bombycilla garrulus',
  description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
  image: 'assets/img/bombycilla.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
}, {
  id: 6,
  name: 'Щегол',
  species: 'Carduelis carduelis',
  description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
  image: 'assets/img/carduelis.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
}], [{
  id: 1,
  name: 'Орёл',
  species: 'Aquila nipalensis',
  description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
  image: 'assets/img/aquila.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
}, {
  id: 2,
  name: 'Коршун',
  species: 'Milvus migrans',
  description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
  image: 'assets/img/milvus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
}, {
  id: 3,
  name: 'Лунь',
  species: 'Circus cyaneus',
  description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
  image: 'assets/img/circus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
}, {
  id: 4,
  name: 'Сокол',
  species: 'Falco peregrinus',
  description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
  image: 'assets/img/falco.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
}, {
  id: 5,
  name: 'Ястреб',
  species: 'Accipiter gentilis',
  description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
  image: 'assets/img/accipiter.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
}, {
  id: 6,
  name: 'Филин',
  species: 'Bubo bubo',
  description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
  image: 'assets/img/bubo.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
}], [{
  id: 1,
  name: 'Альбатрос',
  species: 'Diomedea exulans',
  description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
  image: 'assets/img/diomedea.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
}, {
  id: 2,
  name: 'Олуша',
  species: 'Sula nebouxii',
  description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
  image: 'assets/img/sula.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
}, {
  id: 3,
  name: 'Буревестник',
  species: 'Puffinus griseus',
  description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
  image: 'assets/img/puffinus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
}, {
  id: 4,
  name: 'Пеликан',
  species: 'Pelecanus',
  description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
  image: 'assets/img/pelecanus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
}, {
  id: 5,
  name: 'Пингвин',
  species: 'Aptenodytes forsteri',
  description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
  image: 'assets/img/aptenodytes.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
}, {
  id: 6,
  name: 'Чайка',
  species: 'Larus argentatus',
  description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
  image: 'assets/img/larus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
}]];
/* harmony default export */ const birds_data = (birdsData);
;// CONCATENATED MODULE: ./src/pages/game-page/birds-data-en.js
const birdsDataEn = [[{
  id: 1,
  name: 'Raven',
  species: 'Corvus corax',
  description: 'Raven is a large bird. The body length reaches 70 centimeters, the wingspan is up to one and a half meters. Ravens inhabit the vicinity of the Tower. There is a belief in England that the day the black crows fly away from the Tower, the monarchy will collapse.',
  image: 'assets/img/corvus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
}, {
  id: 2,
  name: 'Shadoof',
  species: 'Grus grus',
  description: 'The sounds made by the shadoof are similar to the voiced «kur-ly - kur-ly». Cranes most often sing in a duet - one bird begins the song with the syllable «kur», and the second picks up «ly». If a bird sings alone, then it makes only the sound of «chickens».',
  image: 'assets/img/grus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
}, {
  id: 3,
  name: 'Swallow',
  species: 'Delichon urbicum',
  description: 'Swallows are characterized by a low chirping. The songs of the swallows do not stop throughout the summer. Researchers distinguish up to 6 chirping sounds in birds: “vit”, “vi-vit”, “chivit”, “chirivit”, etc. Swallows love to sing a duet.',
  image: 'assets/img/delichon.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
}, {
  id: 4,
  name: 'Nightjar',
  species: 'Caprimulgus europaeus',
  description: 'Nightjar is an inconspicuous bird known for its voice. The song of the nightjar sounds like a monotonous trill similar to the rattling of a motorcycle. Such rattling is heard from dusk to dawn, its tonality, frequency and volume change.',
  image: 'assets/img/caprimulgus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
}, {
  id: 5,
  name: 'Cuckoo',
  species: 'Cuculus canorus',
  description: 'The cuckoo was named so because of the peculiarities of its songs. The voiced “cuckoo” cannot be confused with any other bird. Cuckoos do not build nests, their offspring are raised by other species of birds, to which cuckoos throw their eggs.',
  image: 'assets/img/cuculus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
}, {
  id: 6,
  name: 'Tit',
  species: 'Parus major',
  description: 'More than 40 different sound combinations are distinguished in the chirping of tits. They sing almost all year round, fading a little only in winter. Tits are real orderlies of the forest. One pair of tits during the nesting period protects dozens of trees from pests.',
  image: 'assets/img/parus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
}], [{
  id: 1,
  name: 'Sparrow',
  species: 'Passer domesticus',
  description: 'Sparrows are the most famous and recognizable birds. They are easily recognizable by their colorful plumage and perky chirping. Sparrows belong to the synotropic species - they settle close to human habitation.',
  image: 'assets/img/passer.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
}, {
  id: 2,
  name: 'Rook',
  species: 'Corvus frugilegus',
  description: 'Rooks are very smart and quick-witted birds. With the help of a beak, they create and use the simplest tools. Rooks have a developed reflex to the sounds of a tractor. Hearing “rattling”, they fly to the sound - the tractor plows the ground, which means that there is a lot of food in this place.',
  image: 'assets/img/corvus-2.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
}, {
  id: 3,
  name: 'Jackdaw',
  species: 'Coloeus monedula',
  description: 'The word “jackdaw” comes from word “jack” is translated as “black”. This word is often used to refer to ravens or other black birds. The Latin name of the jackdaw “monedula” is associated with the words coin for the bird\'s love for shiny and bright things.',
  image: 'assets/img/coloeus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
}, {
  id: 4,
  name: 'Songthrush',
  species: 'Turdus philomelos',
  description: 'Songthrush is the best singer from the sparrow squad. The song consists only of beautiful sonorous whistles and short trills. Most often it can be heard in the morning and evening. Thrushes sing during the entire nesting period.',
  image: 'assets/img/turdus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
}, {
  id: 5,
  name: 'Magpie',
  species: 'Pica pica',
  description: 'Magpie is a very hardworking bird. She builds up to eight nests, and then chooses the best of them. The entrance to the nest of magpies is always facing south, so that it is warmer in the dwelling. Magpies are the only birds that recognize themselves in a mirror.',
  image: 'assets/img/pica.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
}, {
  id: 6,
  name: 'Jay',
  species: 'Garrulus glandarius',
  description: 'When the jay is worried, the tuft on her head is ruffled. The bird tries to create a frightening sight. Jays are able to imitate the voices of other birds, animals and the sounds that humans create. For the winter they make large stocks of acorns and nuts.',
  image: 'assets/img/garrulus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
}], [{
  id: 1,
  name: 'Finch',
  species: 'Fringilla coelebs',
  description: 'There are 450 species of finches in the wild. In winter, finches lead a flocking lifestyle. Sometimes sparrows can be seen in their families. Finches sing in the spring, with the onset of the mating season. Their singing is a gushing multi-minute roulades.',
  image: 'assets/img/fringilla.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
}, {
  id: 2,
  name: 'Crossbill',
  species: 'Loxia curvirostra',
  description: 'Crossbills are called “Christmas” birds. Under exceptional conditions, they give birth in winter - in January. These birds insulate their nests with moss and animal hair, so the chicks are not cold. In search of cones crossbills can fly 3500 km from the nest.',
  image: 'assets/img/loxia.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
}, {
  id: 3,
  name: 'Turtledove',
  species: 'Streptopelia turtur',
  description: 'Turtledoves live in mixed and broad-leaved forests, as well as in city parks and towns. Birds often choose places of life next to humans and easily get used to people. Due to the melodic pleasant singing of turtle doves, they are often bred at home.',
  image: 'assets/img/streptopelia.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
}, {
  id: 4,
  name: 'Woodpecker',
  species: 'Dendrocopos major',
  description: 'The woodpecker is a conspicuous and noisy bird that often lives next to humans. From mid-January to the end of June, you can hear the “drum roll” of woodpeckers - a trill from the vibration of branches under the quick beats of the bird\'s beak. In good weather, the shot can be heard within a radius of 1.5 km.',
  image: 'assets/img/dendrocopos.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
}, {
  id: 5,
  name: 'Hoopoe',
  species: 'Upupa epops',
  description: 'Hoopoes prefer to live in open landscapes with selected trees or groves. The most typical for birds are forest-steppe and savannah. A hoopoe can choose a place of residence next to a person: pastures, vineyards, orchards.',
  image: 'assets/img/upupa.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
}, {
  id: 6,
  name: 'Swift',
  species: 'Apus apus',
  description: 'Swift can be seen in almost every corner of the planet. They live both in forest areas and in open areas. Swifts live in large flocks. Large colonies of these birds can be seen in cities or on coastal cliffs.',
  image: 'assets/img/apus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
}], [{
  id: 1,
  name: 'Lark',
  species: 'Alauda arvensis',
  description: 'Larks are migratory birds. From the beginning of September, they fly south. They return at the beginning of March, regardless of whether the snow has melted or not. By the arrival of the larks, they determined the onset of spring and the time when it was time to plow the land.',
  image: 'assets/img/alauda.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
}, {
  id: 2,
  name: 'Nightingale',
  species: 'Luscinia luscinia',
  description: 'Nightingales sing from the beginning of May until the end of summer. Each song of the nightingale consists of 12 repeating elements, which are also called knees. In addition to their own trills, nightingales easily and well adopt the singing of other birds.',
  image: 'assets/img/luscinia.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
}, {
  id: 3,
  name: 'Starling',
  species: 'Sturnus vulgaris',
  description: 'Starlings are migratory birds. Synchronous flight of large flocks of starlings is called murmuration. This is a beautiful and mesmerizing phenomenon - many birds seem to dance in the air, forming intricate shapes that decrease and increase in the sky.',
  image: 'assets/img/sturnus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
}, {
  id: 4,
  name: 'Oriole',
  species: 'Oriolus oriolus',
  description: 'The melody of the oriole\'s voice is compared to the sound of a flute. It is difficult for a person to see the oriole, as it lives high in the trees. The oriole is not only a very beautiful, but also a useful bird. It destroys poisonous caterpillars that other birds do not eat.',
  image: 'assets/img/oriolus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
}, {
  id: 5,
  name: 'Waxwing',
  species: 'Bombycilla garrulus',
  description: 'The waxwing has very tenacious claws, which helps the bird to stay on the branches and peck at the berries that are the hardest to get. During courtship, the male offers the female a berry or other treat. If the female accepts it, then the birds create a pair.',
  image: 'assets/img/bombycilla.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
}, {
  id: 6,
  name: 'Goldfinch',
  species: 'Carduelis carduelis',
  description: 'Goldfinches sing beautifully and melodiously. Both in nature and in captivity, they chirp almost all year round. More than 20 iridescent trills are distinguished in the singing of the goldfinch. Goldfinches get used to people, and can even return to the owner after they are released into the wild.',
  image: 'assets/img/carduelis.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
}], [{
  id: 1,
  name: 'Eagle',
  species: 'Aquila nipalensis',
  description: 'In ancient times, the eagle was a symbol of the sun. Eagles often soar above the ground, while their speed can reach 240 km/h. The illusion of slow movement is due to the flight altitude - more than 700 meters',
  image: 'assets/img/aquila.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
}, {
  id: 2,
  name: 'Kite',
  species: 'Milvus migrans',
  description: 'Kites are large predators, they reach a height of about half a meter, and the weight of adults reaches 1 kg. The wings are narrow and long, their span is 1.5 m. Kites often nest in large flocks and even form large colonies.',
  image: 'assets/img/milvus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
}, {
  id: 3,
  name: 'Harrier',
  species: 'Circus cyaneus',
  description: 'Harrier is a small falcon. It feeds mainly on mouse-like rodents, the basis of its diet is voles, hamsters, and mice. The plumage of the Harrier may be ash grey. The comparison “gray-haired like a harrier” is associated with such a bird.',
  image: 'assets/img/circus.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
}, {
  id: 4,
  name: 'Falcon',
  species: 'Falco peregrinus',
  description: 'The Latin name of the falcon Falco comes from the word “sickle” because of the sickle-shaped wings. Long and wide wings allow the falcon to rise high into the sky and soar freely. The flight speed of the falcon reaches 280-320 kilometers per hour.',
  image: 'assets/img/falco.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
}, {
  id: 5,
  name: 'Hawk',
  species: 'Accipiter gentilis',
  description: 'All hawks are characterized by wide and short wings. Another distinguishing feature is the white “eyebrows” above the eyes. Slavic warriors placed the image of a hawk on their banners as a symbol of courage, power and ruthlessness towards enemies.',
  image: 'assets/img/accipiter.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
}, {
  id: 6,
  name: 'Eagle owl',
  species: 'Bubo bubo',
  description: 'The flight of the eagle owl is silent, the eyesight is very sharp. These features make the bird an unsurpassed night hunter. The eagle owl has no natural enemies, not a single animal preys on adult birds. But foxes and wolves attack the chicks.',
  image: 'assets/img/bubo.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
}], [{
  id: 1,
  name: 'Albatross',
  species: 'Diomedea exulans',
  description: 'Albatross is the largest flying bird in the world. The wingspan reaches three and a half, weight - ten kilograms. Albatrosses spend most of their lives in the air, covering vast distances above the ocean.',
  image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
}, {
  id: 2,
  name: 'Gannet',
  species: 'Sula nebouxii',
  description: 'A feature of the blue-footed gannet is not only the rich bright blue color of the legs, but also the fact that they are very warm. While other species of birds warm the clutches with their bodies, the blue-footed booby does this with the help of its paws.',
  image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
}, {
  id: 3,
  name: 'Petrel',
  species: 'Puffinus griseus',
  description: 'The sizes of petrels are different. The smallest of them are up to 25 cm long, the largest - up to 1 m, with a wingspan of about 2 m. There is a belief that the appearance of a petrel in the air portends a storm, as the very name of the bird indicates.',
  image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
}, {
  id: 4,
  name: 'Pelican',
  species: 'Pelecanus',
  description: 'Pelicans are inhabitants of the seas and rivers. They walk awkwardly, but fly and swim well. They feed mainly on fish, organize collective hunts - lining up in a semicircle, they flap their wings and beaks on the water and force out the frightened fish in shallow water.',
  image: 'https://i.ibb.co/mqqxpKB/89644134.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
}, {
  id: 5,
  name: 'Penguin',
  species: 'Aptenodytes forsteri',
  description: 'The male emperor penguin reaches a height of 130 cm, its weight can approach 50 kg. Of all modern penguins, this species is the largest. The penguin\'s diet consists of fish, squid and krill. Birds hunt in the ocean in large groups.',
  image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
}, {
  id: 6,
  name: 'Seagull',
  species: 'Larus argentatus',
  description: 'Seagulls inhabit the shores of the seas, lakes, rivers, reservoirs, swamps, often nest on islands. Since the end of the last century, seagulls began to appear in large cities, where they nest on the roofs of buildings. All seagulls lead a colonial lifestyle.',
  image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
  audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
}]];
/* harmony default export */ const birds_data_en = (birdsDataEn);
;// CONCATENATED MODULE: ./src/utils/english-translations.js
const translation = {
  ['en']: {
    startBtn: 'Play',
    linkStart: 'Start',
    linkPlay: 'Play',
    linkGallery: 'Gallery',
    startTxt: "Do you enjoy birdsongs at any time of the day? </br> Do you consider yourself a connoisseur of bird melodies? </br> Or are you just bored and don't know how to entertain yourself? </br> Then welcome to the fascinating world of Songbird! </br> Let's check how quickly you can guess the song :)",
    cat0: 'Warm-up',
    cat0b: 'No category',
    cat1: 'Passerine',
    cat2: 'Forest birds',
    cat3: 'Songbirds',
    cat4: 'Birds of prey',
    cat5: 'Sea birds',
    resultsTitle: 'Score',
    initialTxt: '<em>Listen to the song </br> and try to guess the bird by choosing its name from the list!</em>',
    nextBtn: 'Next level',
    congrats: 'Congrats!',
    resultsText: 'Your score:',
    resultsMax: "It's the highest score possible!",
    invitation: 'Do you want to play again?',
    resultsBtn: 'Play'
  },
  ['ru']: {
    startBtn: 'Играть',
    linkStart: 'Начало',
    linkPlay: 'Играть',
    linkGallery: 'Галлерея',
    startTxt: 'Любите пение птичек в любое время суток? </br> Считаете себя знатоком птичьих звонких рулад? </br> Просто скучаете и не знаете, как занять время? </br> Тогда добро пожаловать в увлекательный мир Songbird! </br> Давайте проверим, с какой ноты вы сможете угадать мелодию :)',
    cat0: 'Разминка',
    cat0b: 'Без категории',
    cat1: 'Воробьиные',
    cat2: 'Лесные птицы',
    cat3: 'Певчие птицы',
    cat4: 'Хищные птицы',
    cat5: 'Морские птицы',
    resultsTitle: 'Счет',
    initialTxt: '<em>Прослушайте песню </br> и попробуйте угадать птицу, выбрав её имя из списка!</em>',
    nextBtn: 'Следующий уровень',
    congrats: 'Поздравляю!',
    resultsText: 'Ваш результат:',
    resultsMax: 'Это максимальный балл :)',
    invitation: 'Хотите пройти игру еще раз?',
    resultsBtn: 'Играть'
  }
};
;// CONCATENATED MODULE: ./src/index.js











const body = document.getElementById('body');
body.append(components_header);
body.append(pages_start_page);
body.append(components_footer);

//***NAV BAR AND START PAGE LISTENERS***//
const linkStart = document.getElementById("menu-link-start");
const linkPlay = document.getElementById("menu-link-play");
const linkGallery = document.getElementById("menu-link-gallery");
const navLinks = document.querySelectorAll(".menu__item");
document.addEventListener("click", e => {
  let target = e.target;
  if (target.id == "start-btn") {
    replacePages(pages_game_page, pages_start_page, pages_results_page, pages_gallery_page);
    createMainAudio();
    createDescrAudio();
    chooseRandom(currCat);
    activateLink(linkPlay);
    if (currScore != 0) {
      starterPack();
      currCat = 0;
      changeCategory(currCat);
      updateScore();
    }
  }
});
linkPlay.addEventListener("click", () => {
  replacePages(pages_game_page, pages_start_page, pages_results_page, pages_gallery_page);
  createMainAudio();
  createDescrAudio();
  chooseRandom(currCat);
  activateLink(linkPlay);
  if (currScore != 0 || clicks != 0) {
    starterPack();
    currCat = 0;
    changeCategory(currCat);
    updateScore();
  }
});
linkStart.addEventListener("click", () => {
  replacePages(pages_start_page, pages_game_page, pages_results_page, pages_gallery_page);
  activateLink(linkStart);
});
linkGallery.addEventListener("click", () => {
  replacePages(pages_gallery_page, pages_start_page, pages_game_page, pages_results_page);
  createGallery(0, lang);
  activateLink(linkGallery);
});
const replacePages = (newP, old1, old2, old3) => {
  [old1, old2, old3].forEach(page => {
    if (page.parentElement === body) {
      body.replaceChild(newP, page);
      switchLg(lang);
    }
  });
};
const activateLink = l => {
  navLinks.forEach(link => link.classList.remove("menu__link_active"));
  l.classList.add("menu__link_active");
};

//***LANGUAGE SWITCHING***//
const lgBtn = document.getElementById("menu-link-lg");
let lang = 'ru';
lgBtn.addEventListener("click", () => {
  setLg(lang);
  localStorage.setItem('language', lang);
  if (pages_game_page.parentElement === body) {
    translateBirds(lang);
  }
});
const setLg = lg => {
  if (lg === 'ru') {
    lang = 'en';
    lgBtn.src = "assets/icons/ru-icon.png";
  } else {
    lang = 'ru';
    lgBtn.src = "assets/icons/en-icon.png";
  }
  switchLg(lang);
};

//translate elements
const switchLg = lg => {
  linkStart.innerText = translation[lg].linkStart;
  linkPlay.innerText = translation[lg].linkPlay;
  linkGallery.innerText = translation[lg].linkGallery;
  if (pages_start_page.parentElement === body) {
    const startBtn = document.getElementById("start-btn");
    const startTxt = document.getElementById("start-text");
    startBtn.innerText = translation[lg].startBtn;
    startTxt.innerHTML = translation[lg].startTxt;
  }
  if (pages_game_page.parentElement === body) {
    const cat0 = document.getElementById("cat-0");
    const cat1 = document.getElementById("cat-1");
    const cat2 = document.getElementById("cat-2");
    const cat3 = document.getElementById("cat-3");
    const cat4 = document.getElementById("cat-4");
    const cat5 = document.getElementById("cat-5");
    const resultsTitle = document.getElementById("result-title");
    const initialTxt = document.getElementById("bird-text-initial");
    const nextBtn = document.getElementById("btn-next");
    cat0.innerText = translation[lg].cat0;
    cat1.innerText = translation[lg].cat1;
    cat2.innerText = translation[lg].cat2;
    cat3.innerText = translation[lg].cat3;
    cat4.innerText = translation[lg].cat4;
    cat5.innerText = translation[lg].cat5;
    initialTxt.innerHTML = translation[lg].initialTxt;
    resultsTitle.innerText = translation[lg].resultsTitle;
    nextBtn.innerText = translation[lg].nextBtn;
  }
  if (pages_results_page.parentElement === body) {
    const congrats = document.getElementById("results-congrats");
    const resultsText = document.getElementById("results-text");
    const invitation = document.getElementById("invitation-qstn");
    const resultsMax = document.getElementById("results-max");
    const resultsBtn = document.getElementById("results-btn");
    congrats.innerText = translation[lg].congrats;
    resultsText.textContent = translation[lg].resultsText;
    resultsMax.innerText = translation[lg].resultsMax;
    invitation.innerText = translation[lg].invitation;
    resultsBtn.innerText = translation[lg].resultsBtn;
  }
  if (pages_gallery_page.parentElement === body) {
    const cat0 = document.getElementById("gal-cat-0");
    const cat1 = document.getElementById("gal-cat-1");
    const cat2 = document.getElementById("gal-cat-2");
    const cat3 = document.getElementById("gal-cat-3");
    const cat4 = document.getElementById("gal-cat-4");
    const cat5 = document.getElementById("gal-cat-5");
    cat0.innerText = translation[lg].cat0b;
    cat1.innerText = translation[lg].cat1;
    cat2.innerText = translation[lg].cat2;
    cat3.innerText = translation[lg].cat3;
    cat4.innerText = translation[lg].cat4;
    cat5.innerText = translation[lg].cat5;
    createGallery(galleryCat, lang);
  }
};
const translateBirds = lg => {
  const currBirdText = document.getElementById("bird-text");
  const currBirdImg = document.getElementById("bird-img");
  const currBirdName = document.getElementById("bird-name");
  const placeholder = document.getElementById("qstn-name");
  let ids = [0, 1, 2, 3, 4, 5];
  for (let i = 0; i < ids.length; i++) {
    let currentBird = document.getElementById(`bird-${i}`);
    let checkbox = document.getElementById(`${i}`);
    let newBird;
    if (lg === 'en') {
      newBird = src_birdsDataEn[currCat][i];
    } else {
      newBird = src_birdsData[currCat][i];
    }
    if (currBirdName.innerText === currentBird.innerText) {
      currBirdImg.src = newBird.image;
      currBirdName.innerText = newBird.name;
      currBirdText.innerText = newBird.description;
    }
    if (placeholder.innerText === currentBird.innerText) {
      placeholder.innerText = newBird.name;
    }
    if (bird.name === currentBird.innerText) {
      bird.name = newBird.name;
    }
    currentBird.innerText = newBird.name;
    checkbox.value = newBird.name;
  }
};

//save language preference 
window.addEventListener("load", () => {
  if (localStorage.getItem('language')) {
    lang = localStorage.getItem('language');
  }
  switchLg(lang);
  if (pages_game_page.parentElement === body) {
    translateBirds(lang);
  }
});

//***AUDIO PLAYER***//
//question
const createMainAudio = () => {
  const playIcon = document.getElementById("btn-play");
  const audioRange = document.getElementById("qstn-audio-range");
  const audioPlayed = document.getElementById("audio-time");
  const audioTotal = document.getElementById("audio-total");
  const volumeRange = document.getElementById("qstn-volume-range");
  const audio = document.getElementById("qstn-audio");
  const volumeIcon = document.getElementById("qstn-btn-volume");
  const sounds = document.querySelectorAll(".audio");
  playAudio(playIcon, audioRange, audioPlayed, audioTotal, volumeRange, audio, volumeIcon, sounds);
};

//description
const createDescrAudio = () => {
  const playIconB = document.getElementById("bird-btn-play");
  const audioRangeB = document.getElementById("bird-audio-range");
  const audioPlayedB = document.getElementById("bird-audio-time");
  const audioTotalB = document.getElementById("bird-audio-total");
  const volumeRangeB = document.getElementById("bird-volume-range");
  const audioB = document.getElementById("bird-audio");
  const volumeIconB = document.getElementById("bird-btn-volume");
  const sounds = document.querySelectorAll(".audio");
  playAudio(playIconB, audioRangeB, audioPlayedB, audioTotalB, volumeRangeB, audioB, volumeIconB, sounds);
};

//***PLAYING***//
const src_birdsDataEn = birds_data_en;
const src_birdsData = birds_data;
let currCat = 0; //number of current category
let bird = {}; //container for current bird info
let rightAnswer = false;
let currScore = 0;
let clicks = 0;

//choosing a random bird to create answer
const chooseRandom = cat => {
  const num = Math.floor(Math.random() * 6);
  let currBird;
  if (lang === 'ru') {
    currBird = src_birdsData[cat][num]; //data of current question
  } else {
    currBird = src_birdsDataEn[cat][num]; //data of current question
  }

  bird = {
    name: currBird.name,
    species: currBird.species,
    descr: currBird.description,
    image: currBird.image,
    audio: currBird.audio
  };
  console.log(bird.name);
  createQstn();
  listAnswers(cat);
};

//create the current question
const createQstn = () => {
  const audio = document.getElementById("qstn-audio");
  let qstnAudio = bird.audio;
  audio.src = qstnAudio;
};

//create the answers list
const listAnswers = cat => {
  let dataSet;
  if (lang === 'ru') {
    dataSet = src_birdsData;
  } else {
    dataSet = src_birdsDataEn;
  }
  let answers = dataSet[cat].map(value => {
    return value.name;
  });
  for (let i = 0; i < answers.length; i++) {
    let labels = document.getElementById(`bird-${i}`);
    let check = document.getElementById(`${i}`);
    check.value = answers[i];
    labels.innerText = answers[i];
  }
};

//chech the user's input
const checkAnswer = (input, box) => {
  const audio = document.getElementById("qstn-audio");
  let answer = input;
  if (answer === bird.name && rightAnswer === false) {
    box.classList.add("answer__correct");
    yesSound();
    createDescription(box.id);
    revealRightAnswer(box.id);
    audio.pause();
    countScore(currScore);
    rightAnswer = true;
    gameOver(currCat);
    if (currCat != 5) {
      nextCategory();
    }
  } else if (answer != bird.name && rightAnswer === false) {
    box.classList.add("answer__wrong");
    createDescription(box.id);
    noSound();
  } else if (rightAnswer === true) {
    createDescription(box.id);
  }
};

//show description on input
const createDescription = id => {
  const currBirdText = document.getElementById("bird-text");
  const hiddenInfo = document.getElementById("bird-info");
  const initialTxt = document.getElementById("bird-text-initial");
  const currBirdImg = document.getElementById("bird-img");
  const currBirdName = document.getElementById("bird-name");
  const currBirdLatin = document.getElementById("bird-name-latin");
  const currBirdAudio = document.getElementById("bird-audio");
  currBirdText.classList.remove("hidden");
  hiddenInfo.classList.remove("hidden");
  initialTxt.classList.add("hidden");
  let bird;
  if (lang === 'ru') {
    bird = src_birdsData[currCat][id];
  } else {
    bird = src_birdsDataEn[currCat][id];
  }
  currBirdImg.src = bird.image;
  currBirdName.innerText = bird.name;
  currBirdLatin.innerText = bird.species;
  currBirdAudio.src = bird.audio;
  currBirdText.innerText = bird.description;
};

//show the corrent answer in the quqestion box
const revealRightAnswer = id => {
  const placeholder = document.getElementById("qstn-name");
  const qstnImage = document.getElementById("qstn-img");
  let bird;
  if (lang === 'ru') {
    bird = src_birdsData[currCat][id];
  } else {
    bird = src_birdsDataEn[currCat][id];
  }
  placeholder.innerText = bird.name;
  qstnImage.src = bird.image;
};

//add event listener to checkboxes
document.addEventListener("input", e => {
  let target = e.target;
  const checkbox = document.querySelectorAll(".answers__item_input");
  for (let box of checkbox) {
    if (target == box) {
      if (rightAnswer === false) {
        clicks = clicks + 1;
      }
      let input = target.value;
      checkAnswer(input, target);
    }
  }
});

//add ui sounds to user's input
const yesSound = () => {
  let yesSound = new Audio("assets/sounds/correct-answer.mp3");
  yesSound.play();
};
const noSound = () => {
  let noSound = new Audio("assets/sounds/wrong-answer.mp3");
  noSound.play();
};

//count the score
const countScore = actualScore => {
  if (rightAnswer === false) {
    const quizScore = document.getElementById("result-counter");
    let maxTries = 6;
    let roundScore = maxTries - clicks;
    if (maxTries === 0) {
      roundScore = 0;
    }
    currScore = actualScore + roundScore;
    quizScore.innerText = currScore;
  }
};

//unblock the next button
const nextCategory = () => {
  const nextBtn = document.getElementById("btn-next");
  nextBtn.classList.remove("disabled");
  nextBtn.disabled = false;
};
document.addEventListener("click", e => {
  const audio = document.getElementById("bird-audio");
  let target = e.target;
  if (target.id == "btn-next") {
    currCat = currCat + 1;
    starterPack();
    changeCategory(currCat);
    audio.pause();
  }
});

//start the next category
const starterPack = () => {
  const audio = document.getElementById("qstn-audio");
  const nextBtn = document.getElementById("btn-next");
  const placeholder = document.getElementById("qstn-name");
  const qstnImage = document.getElementById("qstn-img");
  const currBirdText = document.getElementById("bird-text");
  const hiddenInfo = document.getElementById("bird-info");
  const initialTxt = document.getElementById("bird-text-initial");
  const checkbox = document.querySelectorAll(".answers__item_input");
  placeholder.innerText = "******";
  qstnImage.src = "assets/img/hidden-bird.jpg";
  currBirdText.classList.add("hidden");
  hiddenInfo.classList.add("hidden");
  initialTxt.classList.remove("hidden");
  for (let input of checkbox) {
    input.classList.remove("answer__correct");
    input.classList.remove("answer__wrong");
  }
  audio.src = "#";
  rightAnswer = false;
  clicks = 0;
  nextBtn.classList.add("disabled");
  nextBtn.disabled = true;
};

//highlight the current category
const changeCategory = cat => {
  if (cat === 0) {
    let previous = document.getElementById(`cat-5`);
    let current = document.getElementById(`cat-${cat}`);
    previous.classList.remove("questions__category_current");
    current.classList.add("questions__category_current");
  } else {
    let previous = document.getElementById(`cat-${cat - 1}`);
    let current = document.getElementById(`cat-${cat}`);
    previous.classList.remove("questions__category_current");
    current.classList.add("questions__category_current");
  }
  chooseRandom(currCat);
};

//ending the game
const gameOver = cat => {
  const linkPlay = document.getElementById("menu-link-play");
  if (rightAnswer === true && cat === 5) {
    body.replaceChild(pages_results_page, pages_game_page);
    switchLg(lang);
    linkPlay.classList.remove("menu__link_active");
    createResults(currScore);
  }
};

//***RESULTS PAGE***/
const createResults = score => {
  const resultsCTA = document.getElementById("results-cta");
  const resultsMax = document.getElementById("results-max");
  const results = document.getElementById("results-score");
  const resultsBtn = document.getElementById("results-btn");
  results.innerText = `${score}!`;
  if (score === 30) {
    resultsCTA.classList.add("hidden");
  } else {
    resultsMax.classList.add("hidden");
    resultsCTA.classList.remove("hidden");
    resultsBtn.classList.remove("hidden");
  }
};

//event listener for starting over
document.addEventListener("click", e => {
  let target = e.target;
  if (target.id == "results-btn") {
    body.replaceChild(pages_game_page, pages_results_page);
    starterPack();
    currCat = 0;
    changeCategory(currCat);
    updateScore();
    activateLink(linkPlay);
  }
});
const updateScore = () => {
  const quizScore = document.getElementById("result-counter");
  if (currCat === 0) {
    currScore = 0;
    quizScore.innerText = currScore;
  }
};

//***GALLERY***//
let galleryCat = 0;
const createGallery = (cat, lang) => {
  const cardText = document.querySelectorAll(".card__text");
  const cardImg = document.querySelectorAll(".card__img");
  const cardTitle = document.querySelectorAll(".card__title");
  const cardLatin = document.querySelectorAll(".card__latin-name");
  const cardAudio = document.querySelectorAll(".card__audio_player");
  let source;
  if (lang === 'ru') {
    source = src_birdsData[cat];
  } else {
    source = src_birdsDataEn[cat];
  }
  for (let i = 0; i < source.length; i++) {
    cardText[i].innerText = source[i].description;
    cardImg[i].src = source[i].image;
    cardTitle[i].innerText = source[i].name;
    cardLatin[i].innerText = source[i].species;
    cardAudio[i].src = source[i].audio;
    createGalleryAudio(i);
  }
};
const createGalleryAudio = i => {
  const playIconC = document.querySelectorAll(".card__audio__btn");
  const audioRangeC = document.querySelectorAll(".card__audio_range");
  const audioPlayedC = document.querySelectorAll(".card__audio_time");
  const audioTotalC = document.querySelectorAll(".card__audio_duration");
  const volumeRangeC = document.querySelectorAll(".card__volume_range");
  const audioC = document.querySelectorAll(".card__audio_player");
  const volumeIconC = document.querySelectorAll(".card__volume_img");
  const sounds = document.querySelectorAll(".audio");
  playAudio(playIconC[i], audioRangeC[i], audioPlayedC[i], audioTotalC[i], volumeRangeC[i], audioC[i], volumeIconC[i], sounds);
};
document.addEventListener("click", e => {
  let target = e.target;
  if (target.id == "scroll-right") {
    galleryCat = galleryCat + 1;
    createGallery(galleryCat, lang);
    activateArrow(galleryCat);
    nextGalleryCat(galleryCat);
  }
});
document.addEventListener("click", e => {
  let target = e.target;
  if (target.id == "scroll-left") {
    galleryCat = galleryCat - 1;
    createGallery(galleryCat, lang);
    activateArrow(galleryCat);
    prevGalleryCat(galleryCat);
  }
});
const activateArrow = cat => {
  const leftArrow = document.getElementById("scroll-left");
  const rightArrow = document.getElementById("scroll-right");
  if (cat === 0) {
    leftArrow.classList.add("disabled");
  } else if (cat > 0 && cat < 5) {
    leftArrow.classList.remove("disabled");
  } else if (cat === 5) {
    rightArrow.classList.add("disabled");
  }
};
const nextGalleryCat = cat => {
  const prev = document.getElementById(`gal-cat-${cat - 1}`);
  const next = document.getElementById(`gal-cat-${cat}`);
  prev.classList.remove("gallery__category_current");
  next.classList.add("gallery__category_current");
};
const prevGalleryCat = cat => {
  const prev = document.getElementById(`gal-cat-${cat + 1}`);
  const next = document.getElementById(`gal-cat-${cat}`);
  prev.classList.remove("gallery__category_current");
  next.classList.add("gallery__category_current");
};
})();

/******/ })()
;