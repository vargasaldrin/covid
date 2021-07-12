import { Chart, Interval } from "bizcharts";
import { useContext, useEffect, useState } from "react";

import { Container, InfoText } from "./styles/GraphThree.style";
import { COVID_DATA_WORLD_URL } from "../utilities/constants";
import { ThemeContext } from "../context/Context";

interface DataObject {
  title: string;
  cases: unknown;
}

interface ArrayData extends Array<DataObject> {}

export default function GraphThree() {
  const [covidSummary, setCovidSummary] = useState<ArrayData>([
    {
      title: "",
      cases: null,
    },
  ]);
  const { toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(COVID_DATA_WORLD_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query($from: ISO8601DateTime, $till: ISO8601DateTime) {
              offchain {
                covid {
                facts( date: {since: $from, till: $till} ){
                  confirmed
                  recovered
                  deaths
                }
              }
            }

            }
            `,
          variables: { limit: 10, offset: 0, from: null, till: null },
        }),
      })
        .then((res) => res.json())
        .then((res) => res.data.offchain.covid.facts[0])
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
    <Chart height={350} width={1000} autoFit data={covidSummary}>
      <Interval position="title*cases" />
    </Chart>
  );

  return (
    <Container>
      <InfoText toggleTheme={toggleTheme}>
        <h2>COVID-19 World Summary</h2>
        <p>
          A graph presentation showing the summary of COVID-19 global confirmed
          cases, recoveries, and deaths.
        </p>
      </InfoText>
      {renderChart}
    </Container>
  );
}
