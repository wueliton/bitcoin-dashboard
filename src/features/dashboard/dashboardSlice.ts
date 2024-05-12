import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Ticker } from "@models/Ticker";

export enum CoinSymbol {
  BTCUSDT = "Bitcoin",
  ETHUSDT = "Ethereum",
  SOLUSDT = "Solana",
  DOGEUSDT = "Dogecoin",
}

export enum CoinVariantion {
  UP,
  NO_CHANGES,
  DOWN,
}

export type DasboardStateItem = {
  initialPrice?: number;
  price: number;
  pricePercent: number;
  variation: CoinVariantion;
  lastValues: number[];
};

type DashboardState = {
  [k in keyof CoinSymbol]: DasboardStateItem;
};

const initialState = Object.fromEntries(
  Object.keys(CoinSymbol).map((key) => [
    key,
    {
      price: 0,
      pricePercent: 0,
      variation: 0,
    },
  ])
) as DashboardState;

export const dashboardSlice = createSlice({
  name: "dasboard",
  initialState,
  reducers: {
    updateTrade: (state, { payload }: PayloadAction<Ticker>) => {
      const coinSymbol = payload.s as keyof CoinSymbol;
      const price = Number(payload.a);

      if (
        price === state[coinSymbol]?.price ||
        !Object.keys(CoinSymbol).includes(String(coinSymbol))
      )
        return;

      const initialPrice = state[coinSymbol]?.initialPrice ?? price;
      const pricePercent = (price - initialPrice) / initialPrice;

      return {
        ...state,
        [coinSymbol]: {
          price: price,
          pricePercent,
          initialPrice,
          variation:
            pricePercent < 0
              ? CoinVariantion.DOWN
              : pricePercent > 0
              ? CoinVariantion.UP
              : CoinVariantion.NO_CHANGES,
        },
      };
    },
  },
});

export const { updateTrade } = dashboardSlice.actions;

export const dashboardValues = (state: RootState) => state.dasboard;

export const dashboardReducer = dashboardSlice.reducer;
