import { List, Typography } from "antd";
import React from "react";

interface ThemeCardProps {
  card: {
    name: string;
    options: string[];
  };
}

const ThemeCard: React.FC<ThemeCardProps> = ({ card }) => {
  return (
    <div className="flex w-[252px] flex-col rounded-md bg-white pl-6 pt-7 custom_shadow">
      <Typography.Title
        level={2}
        style={{
          margin: 0,
          marginBottom: "25px",
          fontSize: "24px",
          lineHeight: "22px",
        }}
      >
        {card.name}
      </Typography.Title>
      <List
        style={{
          paddingBottom: "25px",
          width: "90%",
        }}
      >
        {card.options.map((option) => (
          <List.Item
            key={option}
            style={{
              color: "#42A774",
              fontSize: "18px",
              lineHeight: "22px",
              border: 0,
              paddingBottom: "5px",
              paddingTop: "5px",
              // width: 'fit-content',
              overflowWrap: "break-word",
            }}
          >
            {option}
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default ThemeCard;
