import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

// import img from "./assets/images/img1.webp";
const locales = {
  "en-US": require("./locales/en-US.json"),
  "es-ES": require("./locales/es-ES.json"),
  "sw-SW": require("./locales/sw-SW.json"),

  // "zh-CN": require("./locales/zh-CN.json"),
} as { [lang: string]: { [key: string]: string } };

export const NF = (n: string | number) =>
  String(n).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
export const toDate = (timestamp: number) => {
  const d = new Date(timestamp * 1e3);
  return [d.getMonth() + 1, d.getDate()].join("/");
};
export const toKillo = (n: number) => {
  return Number(n) < 1000 ? String(n) : `${~~(Number(n) / 1000)}k`;
};
export const ellipsis = (address: string, start?: number) => {
  if (!address) return "";
  const len = start || 10;
  return address.length > len
    ? `${address.slice(0, start || 10)}...${address.slice(-4)}`
    : address;
};
export const now = () => Math.round(+new Date().getTime() / 1e3);
export const isSolcVersionText = (version: string) =>
  /^v\d{1,2}\.\d{1,2}\.\d{1,2}\+commit\.[0-9a-f]{8}$/.test(version);

export const validateAddress = (address: string) =>
  /^0x[a-f0-9A-F]{40}$/.test(address);
export const isHex = (hex: string) => /^0x[a-f0-9A-F]+$/.test(hex);
export const validateEmail = (email: string): boolean =>
  email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ) !== null;
export const validateUsername = (username: string): boolean =>
  /^[a-zA-Z0-9]{6,20}$/.test(username);

export const prettyFormat = (n: number, p: number = 8) => {
  const x = String(n.toFixed(p))
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    .split(".");
  return (
    <>
      <span>{x[0]}.</span>
      <span className="gray">{x[1]}</span>
    </>
  );
};

declare interface StoreObject {
  lang: string;
  theme: string;
  cookie?: string;
  loading: boolean;

  // label info
  bottleName: string;
  bottleType: string;
  tagLine: string;
  cl: string;
  vol: string;
  batchDate: string;
  color: string;
  price: number;
  size: string;
  count: number;
  paid: number;

  //personal info
  firstname: string;
  lastname: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  state: string;
  street: string;
  zipcode: string;
  country_code: string;

  //payment info
  payment: string;
  orderid: number;
  created: string;

  // label
  curLabel: number;
  file: string;

  // images
  curImageX: number;
  curImageY: number;
}
const appKey = "myProject-v.1.10";

export const copyToClipboard = (text: string) => {
  var textField = document.createElement("textarea");
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand("copy");
  textField.remove();
};

const getStore = (initialState: StoreObject) => {
  const _init = initialState as any;
  try {
    const buf = window.localStorage.getItem(appKey);
    if (buf) {
      const json = JSON.parse(buf);
      for (let k in json) {
        if (_init[k] !== undefined) {
          _init[k] = json[k];
        }
      }
    }
    _init.loading = false;
  } catch (err) {
    console.log(err);
  }
  return _init;
};

const setStore = (state: any) => {
  delete state.L;
  window.localStorage.setItem(appKey, JSON.stringify(state));
};

const initialState: StoreObject = {
  theme: "",
  lang: "en-US",
  cookie: "",
  loading: false,

  // bottle info
  bottleName: "Finol",
  bottleType: "100% Natural",
  tagLine: "molt",
  cl: "4.5",
  vol: "33",
  batchDate: "2022.12.12",
  color: "#111e0a",
  price: 14,
  size: "small",
  count: 10,
  paid: 16.8,

  // contact info
  firstname: "",
  lastname: "",
  name: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  state: "",
  zipcode: "",
  street: "",
  country_code: "",

  //payment info
  payment: "Credit Card",
  created: "",
  orderid: 10000,

  curLabel: 18,
  file: "",

  // images
  curImageX: 0,
  curImageY: 0,
};

export const slice = createSlice({
  name: "store",
  initialState: getStore(initialState),
  reducers: {
    update: (state: any, action: any) => {
      for (const k in action.payload) {
        if (state[k] === undefined) new Error(`undefined store key ${k}`);
        state[k] = action.payload[k];
      }
      setStore(state);
    },
  },
});

const useStore = () => {
  const G = useSelector((state: StoreObject) => state);
  const L = locales[G.lang];
  const dispatch = useDispatch();
  const update = (payload: Partial<StoreObject>) =>
    dispatch(slice.actions.update(payload as any));
  const T = (
    key: string,
    args?: { [key: string]: string | number } | string | number
  ): string => {
    let text = L[key];
    if (text === undefined) throw new Error("Undefined lang key[" + key + "]");
    if (typeof args === "string" || typeof args === "number") {
      text = text.replace(/\{\w+\}/, String(args));
    } else if (args) {
      for (let k in args)
        text = text.replace(new RegExp("{" + k + "}", "g"), String(args[k]));
    }
    return text;
  };
  const showLoading = (show: boolean) => update({ loading: show });

  return { ...G, T, update, showLoading };
};

export default useStore;
