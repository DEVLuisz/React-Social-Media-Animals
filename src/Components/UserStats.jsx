import React from "react";
import Head from "../Assets/Head";
import useFetch from "../Hooks/useFetch";
import { STATS_GET } from "../Components/api";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data}/>
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
