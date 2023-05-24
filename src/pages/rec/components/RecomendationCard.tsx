import { Button, Layout, Typography } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { groups } from "../mockdata";
import React from "react";

interface RecomendationCardProps {
  group: {
    district: string;
    name: string;
    description: string;
    place: string;
    groups: {
      name: string;
      status: string;
      days: {
        day: {
          name: string;
          time: string;
        };
      }[];
    }[];
  };
}

const RecomendationCard: React.FC<RecomendationCardProps> = ({ group }) => {
  return (
    <Layout
      style={{
        width: 572,
        margin: "0 166px 0 0",
        padding: 33,
        marginBottom: 50,
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
        flex: "none",
      }}
    >
      <Typography.Text
        style={{
          color: "#9A9A9A",
          fontSize: "1rem",
          lineHeight: "1.5rem",
          fontWeight: 400,
        }}
      >
        {group.district}
        {/* Район Таганский */}
      </Typography.Text>
      <Typography.Title
        style={{
          color: "#0E0E0F",
          fontWeight: 600,
          marginTop: 5,
          marginBottom: 10,
          fontSize: 26,
        }}
      >
        {group.name}
        {/* Иностранные языки */}
      </Typography.Title>
      <Typography.Text
        style={{
          color: "#0E0E0F",
          width: 466,
          fontSize: 16,
        }}
      >
        {group.description}
        {/* Занятия по изучению основ грамматики и речевой стилистики, алфавита и по
        проработке правильного произношения иностранных языков. */}
      </Typography.Text>
      <div className="flex flex-row">
        <EnvironmentOutlined
          style={{ fontSize: 14, marginRight: "5px", marginBottom: "5px" }}
        />
        <Typography.Text
          style={{
            color: "#0E0E0F",
            width: 466,
            fontSize: 16,
            margin: "10px 0 15px",
          }}
        >
          {group.place}
          {/* г. Москва, бульвар Маршала Рокоссовского, дом 3м */}
        </Typography.Text>
      </div>
      {/* <div className="grid grid-flow-row grid-cols-2 gap-5"> */}
      <div className="grid grid-flow-row gap-5 custom_grid">
        {group.groups.map((group) => (
          <div key={group.name} className="flex min-w-min flex-col">
            <Typography.Text
              style={{
                color: "#42A774",
                marginBottom: "10px",
                fontSize: "16px",
                lineHeight: "22px",
              }}
            >
              {group.status}
            </Typography.Text>
            <Typography.Text
              style={{
                color: "#0E0E0F",
                marginBottom: "10px",
                fontSize: "16px",
                lineHeight: "22px",
              }}
            >
              Группа
              <span className="ml-[3px] text-base text-slate-500/70">
                {group.name}
              </span>
            </Typography.Text>
            {group.days.map((day) => (
              <div className="mb-[5px] flex h-min flex-row" key={group.name}>
                <p className="my-0 mr-[5px] text-base">{day.day.name}</p>
                <p className="my-0 text-base">{day.day.time}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Button
        type="primary"
        style={{ width: 168, marginTop: "15px", padding: "7px 45px 30px" }}
      >
        Записаться
      </Button>
    </Layout>
  );
};

export default RecomendationCard;
