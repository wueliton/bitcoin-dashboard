import useWebSocket, { ReadyState } from "react-use-websocket";
import { useAppDispatch } from "../app/hooks";
import { updateTrade } from "../features/dashboard/dashboardSlice";
import { Ticker } from "@models/Ticker";
import { useRef } from "react";

export const connectionStatus = {
  [ReadyState.CONNECTING]: "Connecting",
  [ReadyState.CLOSED]: "Connection Closed",
};

export const useTrade = () => {
  const didUnmount = useRef(false);
  const dispatch = useAppDispatch();
  const subscribeTrade = () => {
    webSocket.sendJsonMessage({
      method: "SUBSCRIBE",
      params: [
        "btcusdt@ticker",
        "ethusdt@ticker",
        "solusdt@ticker",
        "dogeusdt@ticker",
      ],
      id: 1,
    });
  };

  const webSocket = useWebSocket(`wss://stream.binance.com:9443/ws`, {
    onOpen: () => subscribeTrade(),
    onMessage: (event) => {
      if (!event.data) return;
      dispatch(updateTrade(JSON.parse(event.data) as Ticker));
    },
    shouldReconnect: () => didUnmount.current === false,
    onReconnectStop: () => {},
  });

  return { ...webSocket, didUnmount };
};
