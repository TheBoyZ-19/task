import { Button, Card, Layout, Space, Typography } from "antd";

import { ArrowLeftOutlined } from "@ant-design/icons";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { questions } from "~/consts/questions";
import { SurveyForm, type QuestionType } from "./ui/survey-form";

/**
 * TODO: Сделать:
 * 1. Сохранение step (через localStorage не работает), а надо ли?
 */

export const SurveyPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleSubmit = () => {
    /**
     * Отправка данные на сервер тут
     * api.recommendation.calculate(answers)
     */
    localStorage.removeItem("step");
  };

  return (
    <Layout style={{ alignItems: "center", justifyContent: "center" }}>
      <Card
        style={{
          width: isMobile ? "100%" : "722px",
          // height: "511px",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
          padding: isMobile ? "0px" : "50px",
        }}
      >
        <div className="relative flex">
          {currentStep !== 1 && (
            <Button
              type="ghost"
              icon={<ArrowLeftOutlined style={{ color: "black" }} />}
              onClick={() => setCurrentStep((current) => current - 1)}
              style={{
                color: "#9A9A9A",
                padding: 0,
                fontSize: "18px",
                position: "absolute",
              }}
            >
              Назад
            </Button>
          )}
          <Typography.Text
            style={{
              color: "#9A9A9A",
              fontSize: "18px",
              marginLeft: "auto",
            }}
          >
            Вопрос {currentStep} из {questions.length}
          </Typography.Text>
        </div>
        <Space direction="vertical" style={{ display: "flex" }} size={50}>
          <SurveyForm
            questionProps={questions[Number(currentStep) - 1] as QuestionType}
            step={currentStep}
          />
          {Number(currentStep) === questions.length ? (
            <Button
              type="primary"
              style={{ width: "129px" }}
              onClick={handleSubmit}
            >
              Подобрать
            </Button>
          ) : (
            <Button
              type="primary"
              style={{ width: "129px" }}
              onClick={() => setCurrentStep((current) => current + 1)}
            >
              Далее
            </Button>
          )}
        </Space>
      </Card>
    </Layout>
  );
};
