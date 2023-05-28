import {
  AutoComplete,
  Checkbox,
  ConfigProvider,
  Layout,
  Radio,
  Typography,
  Input,
  Button,
  Tree,
} from "antd";
const { Search } = Input;
import { useCallback, useState } from "react";
import { allActivities, week, optionsDistricts } from "~/consts";
export const RecLayout = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState("");
  const [isAllShown, setIsAllShown] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const handleChange = (data: string) => {
    setValue(data);
  };

  const handleShowAll = useCallback(() => {
    setIsAllShown((curr) => !curr);
  }, []);
  const handleSelect = useCallback(() => {
    setIsSelected((curr) => !curr);
  }, []);

  return (
    <ConfigProvider
      theme={{
        components: {
          Radio: {
            padding: 34,
          },
          Typography: {
            colorText: "#0E0E0F",
          },
          Button: {
            colorText: "#008C46",
          },
        },
        token: {
          colorPrimary: "#008C46",
          borderRadius: 2,
          colorText: "#0E0E0F",
        },
      }}
    >
      <Layout
        style={{
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#F3F3F3",
        }}
      >
        <Layout
          style={{
            display: "flex",
            width: "1198px",
            paddingLeft: "166px",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <Typography.Title
            style={{
              marginBottom: 40,
              color: "black",
              fontWeight: 600,
              marginTop: 77,
            }}
          >
            Подобрали для вас
          </Typography.Title>
          <div className="flex flex-row ">
            <div className="flex min-w-[277px] flex-col">
              <Typography.Text
                style={{
                  paddingBottom: 8,
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  fontWeight: 600,
                }}
              >
                Формат
              </Typography.Text>
              <Radio.Group
                defaultValue="a"
                buttonStyle="solid"
                size="large"
                style={{ marginBottom: 28 }}
              >
                <Radio.Button value="a">Очно</Radio.Button>
                <Radio.Button value="b">Онлайн</Radio.Button>
              </Radio.Group>
              <Typography.Text
                style={{
                  paddingBottom: 8,
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  fontWeight: 600,
                }}
              >
                Место проведения
              </Typography.Text>
              <AutoComplete
                style={{ width: 223 }}
                placeholder="Все районы"
                options={optionsDistricts}
                value={value}
                onChange={handleChange}
                className="mb-7"
                filterOption={(inputValue, option) =>
                  option?.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
              />
              <Typography.Text
                style={{
                  paddingBottom: 8,
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  fontWeight: 600,
                }}
              >
                Направления
              </Typography.Text>
              {isAllShown ? (
                <Tree
                  checkable
                  multiple
                  treeData={allActivities}
                  style={{
                    width: 223,
                    scrollbarWidth: "none",
                    marginBottom: 28,
                    maxHeight: 140,
                    overflow: isAllShown ? "auto" : "hidden",
                  }}
                />
              ) : (
                <Tree
                  checkable
                  multiple
                  treeData={allActivities.slice(0, 3)}
                  onExpand={handleSelect}
                  style={{
                    width: 223,
                    scrollbarWidth: "none",
                    marginBottom: 28,
                    maxHeight: 140,
                    overflow: isSelected ? "auto" : "hidden",
                  }}
                />
              )}
              <Button
                onClick={handleShowAll}
                style={{ marginBottom: 28, maxWidth: 230 }}
              >
                {isAllShown ? "Скрыть" : "Показать все"}
              </Button>
              <Typography.Text
                style={{
                  paddingBottom: 8,
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  fontWeight: 600,
                }}
              >
                Дни недели
              </Typography.Text>
              {week.map((day) => (
                <Checkbox style={{ marginBottom: "10px" }} key={day.key}>
                  {day.day}
                </Checkbox>
              ))}
              <div className="mt-8 flex">
                <Button style={{ padding: "7px 22px 30px" }} type="primary">
                  Показать
                </Button>
                <Button type="text" style={{ padding: "7px 22px 30px" }}>
                  Сбросить
                </Button>
              </div>
            </div>
            <div className="flex w-[100%] flex-col items-center">
              <Search
                style={{ width: 572, boxShadow: "none", margin: "0 166px 0 0" }}
                placeholder="Направление или номер группы"
                size="middle"
                className="pb-8"
                enterButton
              />
              {children}
            </div>
          </div>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
