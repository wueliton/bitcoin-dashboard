import { FC, memo } from "react";
import styles from "./MonitorCard.module.scss";
import { CoinSymbol, CoinVariantion, DasboardStateItem } from "@features/dashboard/dashboardSlice";
import { priceToUSDT } from "@utils/number_to_price";
import { ArrowIcon } from "@icons/Arrow";
import { BTCUSDT } from "@icons/BTCUSDT";
import { DOGEUSDT } from "@icons/DOGEUSDT";
import { ETHUSDT } from "@icons/ETHUSDT";
import { SOLUSDT } from "@icons/SOLUSDT";

const coinVariationClasses = {
    [CoinVariantion.DOWN]: styles.down,
    [CoinVariantion.UP]: styles.up,
    [CoinVariantion.NO_CHANGES]: ''
}

const coinIcons = {
    BTCUSDT: <BTCUSDT />,
    DOGEUSDT: <DOGEUSDT />,
    ETHUSDT: <ETHUSDT />,
    SOLUSDT: <SOLUSDT />
}

const MonitorCard: FC<DasboardStateItem & { symbol: string }> = memo(({symbol, price, pricePercent, variation }) => {
    return <div className={styles.card}>
        <div className={styles['card-body']}>
            <div className={styles['card-header']}>
                {coinIcons[symbol as keyof typeof coinIcons]}
                <p>{CoinSymbol[symbol as keyof typeof CoinSymbol]}</p>
                <p className={styles.symbol}>{symbol.substring(0, 3)}</p>
            </div>
            <h3>{priceToUSDT(price)}<span>USDT</span></h3>
            <p className={`${coinVariationClasses[variation]} ${styles.variation}`}>{variation !== CoinVariantion.NO_CHANGES && <ArrowIcon />} {pricePercent}%</p>
        </div>
    </div>
});

export default MonitorCard;