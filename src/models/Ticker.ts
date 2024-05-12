export type Ticker = {
  /** Event type */
  e: string;
  /** Event time */
  E: number;
  /** Symbol */
  s: string;
  /** Price change */
  p: string;
  /** Price change percent */
  P: string;
  /** Weighted average price */
  w: string;
  /** First trade(F)-1 price (first trade before the 24hr rolling window) */
  x: string;
  /** Last price */
  c: string;
  /** Last quantity */
  Q: string;
  /** Best bid price */
  b: string;
  /** Best bid quantity */
  B: string;
  /** Best ask price */
  a: string;
  /** Best ask quantity */
  A: string;
  /** Open price */
  o: string;
  /** High price */
  h: string;
  /** Low price */
  l: string;
  /** Total traded base asset volume */
  v: string;
  /** Total traded quote asset volume */
  q: string;
  /** Statistics open time */
  O: number;
  /** Statistics close time */
  C: number;
  /** First trade ID */
  F: number;
  /** Last trade Id */
  L: number;
  /** Total number of trades */
  n: number;
};
