import "./App.css";
import Search from "./components/search/Search";
import { ConfigProvider, Layout, Typography } from "antd";
import frFR from "antd/locale/fr_FR";
import { LinuxOutlined } from "@ant-design/icons";

const { Title } = Typography;

function App() {
  return (
    <ConfigProvider locale={frFR}>
      <Layout>
        <div>
          <Title style={{ paddingLeft: 20, paddingRight: 20 }}>
            Pingouin !
            <LinuxOutlined />
          </Title>
        </div>
        <div>
          <Search />
        </div>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
