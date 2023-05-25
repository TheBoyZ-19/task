import {
  Checkbox,
  Radio,
  Space,
  Typography,
  type RadioChangeEvent,
} from "antd";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export enum AnswerType {
  RADIO = "RADIO",
  CHECKBOX = "CHECKBOX",
}

export type QuestionType = {
  title: string;
  answers: string[];
  type: AnswerType;
};

export type SurveyFormProps = {
  questionProps: QuestionType;
  step: number;
};

export const SurveyForm = ({ questionProps, step }: SurveyFormProps) => {
  const [answer, setAnswer] = useState<number>(0);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setAnswer(0);
  }, [step]);

  const onChange = (e: RadioChangeEvent) => {
    setAnswer(e.target.value as number);
  };

  return (
    <>
      <Typography.Title
        style={{
          marginTop: "20px",

          fontSize: isMobile ? "24px" : "28px",
        }}
      >
        {questionProps.title}
      </Typography.Title>
      {questionProps.type === AnswerType.CHECKBOX && (
        <Typography.Paragraph style={{ color: "#9A9A9A", marginBottom: 0 }}>
          Можно выбрать несколько ответов
        </Typography.Paragraph>
      )}
      {questionProps.type === AnswerType.RADIO ? (
        <Radio.Group onChange={onChange} value={answer}>
          <Space
            direction="vertical"
            style={{
              display: "flex",
              marginTop: "35px",
            }}
            size={25}
          >
            {questionProps.answers.map((answer, index) => {
              return (
                <Radio key={index} value={index + 1}>
                  <Typography.Paragraph style={{ fontSize: "16px", margin: 0 }}>
                    {answer}
                  </Typography.Paragraph>
                </Radio>
              );
            })}
          </Space>
        </Radio.Group>
      ) : (
        <Checkbox.Group>
          <Space
            direction="vertical"
            style={{
              display: "flex",
              marginTop: "35px",
            }}
            size={25}
          >
            {questionProps.answers.map((answer, index) => {
              return (
                <Checkbox key={index} value={index}>
                  <Typography.Paragraph style={{ fontSize: "16px", margin: 0 }}>
                    {answer}
                  </Typography.Paragraph>
                </Checkbox>
              );
            })}
          </Space>
        </Checkbox.Group>
      )}
    </>
  );
};
