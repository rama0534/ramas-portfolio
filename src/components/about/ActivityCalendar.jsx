import ActivityCalendar from "react-activity-calendar";
import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

function ActivityCalendarComponent({ title, fetchUrl }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchActivityData = async () => {
      try {
        const response = await fetch(fetchUrl);
        if (response.ok) {
          const result = await response.json();
          if (title === "LeetCode") {
            const submissions = result.submissionCalendar;
            const transformedData = Object.entries(submissions).map(
              ([timestamp, count]) => {
                const date = new Date(Number(timestamp) * 1000)
                  .toISOString()
                  .split("T")[0];
                const level = getLevel(count);
                return {
                  date,
                  count,
                  level,
                };
              }
            );
            setData(transformedData);
          } else {
            setData(result.contributions);
          }
        } else {
          console.error("Failed to fetch data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchActivityData();
  }, []);

  const getLevel = (count) => {
    if (count === 0) return 0;
    if (count <= 2) return 1;
    if (count <= 5) return 2;
    if (count <= 10) return 3;
    return 4;
  };

  const explicitTheme = {
    light: ["#f6f8f4", "#c9f3ac", "#aff47f", "#6bef18", "#41a005"],
    dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
  };
  return (
    <Row className="about-content">
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="theme-color"> {title} </strong>Activities
      </h1>
      <ActivityCalendar
        blockMargin={8}
        theme={explicitTheme}
        blockSize={14}
        data={data}
        blockRadius={5}
        labels={{
          legend: {
            less: "💩",
            more: "🥇",
          },
          totalCount: "{{count}} contributions in {{year}}",
        }}
        showWeekdayLabels="true"
      />
    </Row>
  );
}

export default ActivityCalendarComponent;
