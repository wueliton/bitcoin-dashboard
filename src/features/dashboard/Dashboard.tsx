import { FC, Suspense, lazy, memo } from "react";
import { RootState } from "@state/store";
import styles from "./Dashboard.module.scss";

const MonitorCard = lazy(() => import('@features/monitor-card/MonitorCard'));

const Dashboard: FC<{ values: RootState['dasboard'] }> = memo(({ values }) => {
    return <div className={styles.dashboard}>
        {Object.entries(values).map(([symbol, values]) => <Suspense key={symbol} fallback={<>loading</>}><MonitorCard symbol={symbol} {...values} /></Suspense>)}
    </div>
})

export default Dashboard;
