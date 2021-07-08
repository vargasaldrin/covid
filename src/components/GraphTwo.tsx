import { Chart, Interval } from "bizcharts";
import React, { useEffect, useState } from "react";
import { COVID_REGION_URL, REGIONS_PHILIPPINES } from "../utilities/constants";

interface DataObject {
  region: string;
  cases: number;
  recovered: number;
  deaths: number;
}
interface GraphObject {
  title: string;
  cases: unknown;
}

interface ArrayData extends Array<DataObject> {}
interface ArrayGraph extends Array<GraphObject> {}

export default function GraphTwo() {
  const [regionChoice, setRegionChoice] = useState("NCR");
  const [regionGraph, setRegionGraph] = useState<ArrayGraph | null>(null);
  const [regionSummary, setRegionSummary] = useState<ArrayData | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(COVID_REGION_URL)
        .then((res) => res.json())
        .then((res) => res.data)
        .catch((err) => console.error(err));

      setRegionSummary(data);
    };

    getData();
  }, []);

  useEffect(() => {
    if (regionSummary) {
      const isEqual = (element: DataObject) =>
        element.region === regionChoice.toLowerCase();
      const regionData = regionSummary.find(isEqual);

      if (regionData) {
        const chartData = Object.entries(regionData)
          .map((item) => {
            return {
              title: item[0],
              cases: item[1],
            };
          })
          .filter((item) => item.title !== "region");

        setRegionGraph(chartData);
      }
    }
  }, [regionChoice, regionSummary]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegionChoice(e.target.value);
  };

  const regionOptions = REGIONS_PHILIPPINES.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  const renderChart = regionGraph && (
    <Chart height={320} autoFit data={regionGraph}>
      <Interval position="title*cases" />
    </Chart>
  );

  return (
    <div>
      <label htmlFor="region">Choose a region:</label>

      <select
        id="region"
        name="region"
        onChange={handleChange}
        value={regionChoice}
      >
        {regionOptions}
      </select>
      {renderChart}
    </div>
  );
}
