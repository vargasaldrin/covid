import { Chart, Interval } from "bizcharts";
import { useEffect, useState } from "react";
import { COVID_SUMMARY_URL } from "../utilities/constants";

interface DataObject {
  title: string;
  cases: unknown;
}

interface ArrayData extends Array<DataObject> {}

export default function GraphOne() {
  const [covidSummary, setCovidSummary] = useState<ArrayData | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(COVID_SUMMARY_URL)
        .then((res) => res.json())
        .then((res) => res.data)
        .catch((err) => console.error(err));

      const newData = Object.entries(data)
        .slice(0, 4)
        .map((item) => {
          return { title: item[0], cases: item[1] };
        });

      setCovidSummary(newData);
    };

    getData();
  }, []);

  const renderChart = covidSummary && (
    <Chart height={350} width={500} autoFit data={covidSummary}>
      <Interval position="title*cases" />
    </Chart>
  );

  return <div>{renderChart}</div>;
}
