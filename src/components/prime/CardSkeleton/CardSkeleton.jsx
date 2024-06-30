import { Skeleton } from "primereact/skeleton";
import { SkeletonCardDetails } from "./CardSkeleton.styles";

const CardSkeleton = () => {
  return (
    <SkeletonCardDetails>
      <Skeleton width="170px" height="210px"></Skeleton>
    </SkeletonCardDetails>
  );
};

export default CardSkeleton;
