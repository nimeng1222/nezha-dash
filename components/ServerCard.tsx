import React from "react";

import ServerUsageBar from "@/components/ServerUsageBar";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ServerCardProps = {
  id: number;
  status: string;
  name: string;
  uptime: number;
  cpu: number;
  mem: number;
  stg: number;
  up: number;
  down: number;
};

export default function ServerCard({
  status,
  name,
  uptime,
  cpu,
  mem,
  stg,
  up,
  down,
}: ServerCardProps) {
  return status === "online" ? (
    <Card
      className={
        "flex flex-col items-center justify-start gap-3 p-3 md:px-5 lg:flex-row"
      }
    >
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <section
              className={"flex items-center justify-start gap-2 lg:w-28"}
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-green-500"></span>
              <p className="break-all text-sm font-bold tracking-tight">
                {name}
              </p>
            </section>
          </TooltipTrigger>
          <TooltipContent>
            <section>
              <div>Hostname: {name}</div>
              <div>Online: {uptime.toFixed(0)} Days</div>
            </section>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <section className={"grid grid-cols-5 items-center gap-3"}>
        <div className={"flex flex-col"}>
          <p className="text-xs text-muted-foreground">CPU</p>
          <div className="text-xs font-semibold">{cpu.toFixed(2)}%</div>
          <ServerUsageBar value={cpu} />
        </div>
        <div className={"flex flex-col"}>
          <p className="text-xs text-muted-foreground">Mem</p>
          <div className="text-xs font-semibold">{mem.toFixed(2)}%</div>
          <ServerUsageBar value={mem} />
        </div>
        <div className={"flex flex-col"}>
          <p className="text-xs text-muted-foreground">STG</p>
          <div className="text-xs font-semibold">{stg.toFixed(2)}%</div>
          <ServerUsageBar value={stg} />
        </div>
        <div className={"flex flex-col"}>
          <p className="text-xs text-muted-foreground">Upload</p>
          <div className="text-xs font-semibold">{up.toFixed(2)}Mb/s</div>
        </div>
        <div className={"flex flex-col"}>
          <p className="text-xs text-muted-foreground">Download</p>
          <div className="text-xs font-semibold">{down.toFixed(2)}Mb/s</div>
        </div>
      </section>
    </Card>
  ) : (
    <Card
      className={
        "flex flex-col items-center justify-start gap-3 p-3 md:px-5 lg:flex-row"
      }
    >
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <section
              className={"flex items-center justify-start gap-2 lg:w-28"}
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-red-500"></span>
              <p className="text-sm font-bold tracking-tight">{name}</p>
            </section>
          </TooltipTrigger>
          <TooltipContent>Offline</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Card>
  );
}
