"use client";
import Image from "next/image";

export function SpinLoader({ size }: { size: string | number }) {
  return (
    <div>
      <Image
        width={20}
        height={20}
        src="loader.svg"
        alt="spin_loader"
        className="animate-spin"
      />
    </div>
  );
}
