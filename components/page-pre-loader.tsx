"use client";
import { usePreLoader } from "@/hooks/use-pre-loader";
import { SpinLoader } from "./spin-loader";

export function PagePreLoader(props) {
  const { pageLoading, nestedLoading } = usePreLoader(props.time);
  console.log(props);

  if (props.type === "page") {
    return (
      <div>
        {pageLoading ? (
          <div className="w-screen h-screen flex justify-center items-center">
            <SpinLoader />
          </div>
        ) : (
          props.children
        )}
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      {nestedLoading ? (
        <div className="w-full h-full  flex justify-center items-center">
          <SpinLoader />
        </div>
      ) : (
        props.children
      )}
    </div>
  );
}
