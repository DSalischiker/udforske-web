import {useEffect} from 'react';
import dynamic from "next/dynamic";
/* import {LeafletMap} from 'components'; */
const Map = () => {
  /* const LeafletMap = dynamic(
        () => import('components'), // replace '@components/map' with your component's location
        {
          loading: () => <p>A map is loading</p>,
          ssr: false // This line is important. It's what prevents server-side render
        }
      )
      return <LeafletMap /> */
        return(
          <></>
        )
  /* return (
    <div suppressHydrationWarning={true}>
      {process.browser && <LeafletMap />}
      <div>some other component</div>
    </div>
  ); */
};

export default Map;
