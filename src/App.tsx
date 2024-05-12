import './App.scss';
import { useTrade } from '@hooks/useTrade';
import { lazy, useEffect } from 'react';
import { useAppSelector } from './app/hooks';
import { dashboardValues } from '@features/dashboard/dashboardSlice';
import { ReadyState } from 'react-use-websocket';

const DashboardComponent = lazy(() => import("@features/dashboard/Dashboard"));
const LoadingComponent = lazy(() => import("@features/loading/Loading"));

function App() {
  const { readyState, didUnmount } = useTrade();
  const dashboard = useAppSelector(dashboardValues);

  useEffect(() => {
    return () => {
      didUnmount.current = true;
    }
  }, []);

  return (
    <>
      <DashboardComponent values={dashboard} />
      {[ReadyState.CONNECTING, ReadyState.CLOSED].includes(readyState) && <LoadingComponent status={readyState} />}
    </>
  )
}

export default App;
