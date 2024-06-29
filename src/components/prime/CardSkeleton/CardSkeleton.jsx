import { Skeleton } from "primereact/skeleton";
import "./CardSkeleton.css";

const CardSkeleton = () => {
  return (
    <div style={{ marginTop: `20px` }} className="SkeletonCardDetails">
      <Skeleton width="170px" height="210px"></Skeleton>
    </div>
  );
};

export default CardSkeleton;
