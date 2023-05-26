import { Button, Form, Input, Typography } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
const { Text } = Typography;
interface PopupProps {
  isPopupShown: boolean;
  setIsPopupShowm: (arg: boolean) => void
}

const Popup: React.FC<PopupProps> = ({ isPopupShown, setIsPopupShowm }) => {
  return (
    <div
      className={`absolute z-40 h-screen w-screen bg-black/40 ${
        isPopupShown ? "visible" : "hidden"
      }`}
    >
      <div className="relative -right-2/4 top-2/4 flex w-[574px] translate-x-[-50%] translate-y-[-50%] flex-col rounded-md bg-white px-[74px] custom_shadow">
        <Button
          icon={<CloseCircleOutlined style={{fontSize: '22px'}} />}
          style={{ position: "absolute", top: "74px", right: "74px", backgroundColor: '#FFFFFF', border: "0"}}
          onClick={() => setIsPopupShowm(false)}
        />
        <Typography.Title
          level={2}
          style={{ marginTop: "121px", width: "fit-content" }}
        >
          Введите свои данные
        </Typography.Title>
        <Text
          style={{
            color: "#9A9A9A",
            fontSize: "16px",
            lineHeight: "22px",
            width: "500px",
            marginBottom: "35px",
          }}
        >
          Это поможет нам определить - участник ли вы “Московского долголетия”
          или нет
        </Text>
        <Form
          layout="vertical"
          style={{
            width: 277,
          }}
        >
          <Form.Item label="ФИО" name="FIO">
            <Input placeholder="Иванов Иван Иванович" />
          </Form.Item>
          <Form.Item label="Дата рождения" name="date of birth">
            <Input placeholder="30.09.1960" />
          </Form.Item>
          <Button
            type="primary"
            style={{
              marginBottom: "79px",
              marginTop: "26px",
              padding: "7px 42px 7px 42px",
            }}
          >
            Далее
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Popup;
