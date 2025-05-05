
"use client";

import DailyIframe from "@daily-co/daily-js";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

interface VideoCallProps {
  roomUrl: string;
  onEndCall: () => void;
}

export const VideoCall = ({ roomUrl, onEndCall }: VideoCallProps) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [callFrame, setCallFrame] = useState<any>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const daily = DailyIframe.createFrame(videoRef.current, {
      iframeStyle: {
        width: "100%",
        height: "100%",
        border: "0",
        borderRadius: "12px",
      },
    });

    daily.join({ url: roomUrl });
    setCallFrame(daily);

    return () => {
      daily?.destroy();
    };
  }, [roomUrl]);

  const handleEndCall = () => {
    callFrame?.destroy();
    onEndCall();
  };

  return (
    <div className="flex h-[600px] w-full flex-col gap-4">
      <div ref={videoRef} className="h-full w-full rounded-xl bg-gray-100" />
      <Button onClick={handleEndCall} variant="destructive">
        End Call
      </Button>
    </div>
  );
};
