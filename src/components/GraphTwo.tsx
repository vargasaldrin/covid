import { Chart, Interval } from "bizcharts";
import React, { useContext, useEffect, useState } from "react";

import { COVID_REGION_URL, REGIONS_PHILIPPINES } from "../utilities/constants";
import { ThemeContext } from "../context/Context";
import { Container, InfoText } from "./styles/GraphTwo.style";

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
  const { toggleTheme } = useContext(ThemeContext);

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
    <Chart height={350} width={500} autoFit data={regionGraph}>
      <Interval position="title*cases" />
    </Chart>
  );

  return (
    <Container>
      <InfoText toggleTheme={toggleTheme}>
        <h2>COVID-19 Region Summary</h2>
        <label htmlFor="region">
          Choose a region:{" "}
          <select
            id="region"
            name="region"
            onChange={handleChange}
            value={regionChoice}
          >
            {regionOptions}
          </select>
        </label>
        <p>
          A graph presentation showing the summary of COVID-19 cases,
          recovieries and deaths per region.
        </p>
      </InfoText>

      {renderChart}
    </Container>
  );
}
