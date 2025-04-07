import { ChartTab } from "@/app/ChartTab/ChartTab";
import { StatisticsTab } from "@/app/StatisticsTab/StatisticsTab";
import { WalletTab } from "@/app/WalletTab/WalletTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/shadcn/tabs";
import React from "react";

export function MainTabs() {
  return (
    <Tabs defaultValue="account" className="w-[800px] flex justify-center">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="wallet">Wallet</TabsTrigger>
        <TabsTrigger value="statistics">Statistics</TabsTrigger>
        <TabsTrigger value="chart">Chart</TabsTrigger>
      </TabsList>
      <TabsContent value="wallet">
        <WalletTab />
      </TabsContent>
      <TabsContent value="statistics">
        <StatisticsTab />
      </TabsContent>
      <TabsContent value="chart">
        <ChartTab />
      </TabsContent>
    </Tabs>
  );
}
