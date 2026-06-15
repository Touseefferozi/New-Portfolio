"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import loaderImage from "@/Images/Gemini_Generated_Image_o7is35o7is35o7is.png";

type StartupLoaderProps = {
  children: React.ReactNode;
};

const LOADER_MIN_DURATION_MS = 1800;

export default function StartupLoader({ children }: StartupLoaderProps) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setShowLoader(false);
    }, LOADER_MIN_DURATION_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {showLoader ? (
        <div className="startup-loader" aria-label="Loading site">
          <div className="startup-loader-core">
            <div className="startup-loader-ring startup-loader-ring--one" />
            <div className="startup-loader-ring startup-loader-ring--two" />
            <div className="startup-loader-ring startup-loader-ring--three" />
            <div className="startup-loader-orbit startup-loader-orbit--one" />
            <div className="startup-loader-orbit startup-loader-orbit--two" />
            <div className="startup-loader-avatar-wrapper">
              <Image
                src={loaderImage}
                alt="Toseef profile"
                priority
                className="startup-loader-avatar"
              />
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}