import { ThreeCircles } from 'react-loader-spinner';

import { LoaderDiv } from './LoaderSpinner.styled';

export const Loader = () => {
  return (
    <LoaderDiv>
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="var(--ns-background-color)"
        innerCircleColor="var(--ns-second-background-color)"
        middleCircleColor="var(--ns-third-background-color)"
      />
    </LoaderDiv>
  );
};
