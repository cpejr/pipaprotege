import Routes from "./routes";
import { ConfigProvider } from "antd";

export default function AppProvider() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#013C9D",
          colorBgContainer: "#080B10",
          colorText: "#FFFFFF",
          fontFamily: "'Exo 2', sans-serif",
          fontSize: "15px",
        },
      }}
    >
      <Routes />
    </ConfigProvider>
  );
}
