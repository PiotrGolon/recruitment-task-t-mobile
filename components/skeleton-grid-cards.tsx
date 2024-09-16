import { CardWrapperLoader } from "@/components/card-wrapper-loader";

interface SkeletonCardProps {
  count: number;
}

/**
 * A component that renders a grid with card skeletons.
 */
export const SkeletonGridCards = ({ count }: SkeletonCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      {Array.from({ length: count }).map((_, index) => (
        <CardWrapperLoader key={index} />
      ))}
    </div>
  );
};
