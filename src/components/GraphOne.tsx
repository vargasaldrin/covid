import { Chart, Interval } from "bizcharts";
import { useContext, useEffect, useState } from "react";

import { Container, InfoText } from "./styles/GraphOne.style";
import { COVID_SUMMARY_URL } from "../utilities/constants";
import { ThemeContext } from "../context/Context";

interface DataObject {
  title: string;
  cases: unknown;
}

interface ArrayData extends Array<DataObject> {}

export default function GraphOne() {
  const [covidSummary, setCovidSummary] = useState<ArrayData>([
    {
      title: "",
      cases: null,
    },
  ]);
  const { toggleTheme } = useContext(ThemeContext);

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

  const renderChart = (
    <Chart height={350} width={500} autoFit data={covidSummary}>
      <Interval position="title*cases" />
    </Chart>
  );

  return (
    <Container>
      <InfoText toggleTheme={toggleTheme}>
        <h2>Covid-19 Philippines Summary</h2>
        <p>
          A graph presentation showing the summary of COVID-19 total cases,
          active cases, deaths and recoveries
        </p>
      </InfoText>
      {renderChart}
    </Container>
  );
}
