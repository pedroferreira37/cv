import { useState, useEffect, useRef } from "react";

export function Error({ message }: { message: string | null | undefined }) {
  return (
    <div className="w-full text-sm text-center text-red-500  rounded  transition py-2">
      {message}
    </div>
  );
}
