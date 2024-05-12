import { connectionStatus } from "@hooks/useTrade";
import { FC } from "react";
import { ReadyState } from "react-use-websocket";
import styles from "./Loading.module.scss";

export const Loading: FC<{ status: ReadyState }> = ({status}) => {
    return <div className={styles.loading}>{connectionStatus[status as keyof typeof connectionStatus]}</div>
}

export default Loading;