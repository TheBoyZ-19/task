import { Button, ConfigProvider, Typography } from "antd";
import React, { useState } from "react";
import { ThemeCard } from "./ui/ThemeCard";
import Image from "next/image";
import { mockRecomendationHomePageData } from "~/consts";
import { type NextPage } from "next";
import { Popup } from "./ui/Popup";
import lens from '/public/g10.svg'
const { Text } = Typography;

export const HomePage: NextPage = () => {
  const [isPopupShown, setIsPopupShowm] = useState(false);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#008C46",
          borderRadius: 2,
          colorText: "#0E0E0F",
        },
      }}
    >
      <Popup isPopupShown={isPopupShown} setIsPopupShowm={setIsPopupShowm} />
      <div className="h-screen bg-[#F3F3F3]">
        <div className="mx-auto flex w-fit flex-col">
          <Typography.Title
            style={{
              color: "#008C46",
              margin: "180px 0 30px",
              fontSize: "28px",
              lineHeight: "130%",
            }}
          >
            Рекомендуемые направления
          </Typography.Title>
          <div className="mb-24 flex w-[900px] flex-row justify-between">
            {mockRecomendationHomePageData.map((card) => (
              <ThemeCard key={card.name} card={card} />
            ))}
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <Typography.Title
                level={2}
                style={{
                  color: "#008C46",
                  fontSize: "28px",
                  lineHeight: "130%",
                  width: "500px",
                  marginTop: "0",
                }}
              >
                Поможем вам подобрать интересные занятия
              </Typography.Title>
              <Text
                style={{
                  fontSize: "18px",
                  lineHeight: "22px",
                  width: "500px",
                  marginBottom: "30px",
                }}
              >
                Пройдите тест и узнайте, какие направления подходят именно вам.
              </Text>
              <Button
                type="primary"
                style={{ width: "200px" }}
                onClick={() => setIsPopupShowm(true)}
              >
                Подобрать занятие
              </Button>
            </div>
            <Image
              src={lens as string}
              width={200}
              height={150}
              alt="lupa"
              className="self-center"
            />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};
