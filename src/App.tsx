import { useCallback, useEffect, useState } from "react";
import { configure } from "mobx";
import axios from "axios";

import { HttpApi } from "@shared/api";
import { Container } from "@shared/components";
import injector from "@shared/utils/Injector";

import { TemplateBuilderService } from "@widgets/services/widget-settings/WidgetBuilderService";
import { ButtonWidget } from "@widgets/ui/widget-settings";

const initBusinessLogic = async () => {
  configure({
    enforceActions: "never",
  });

  const baseURL: string = "https://onepage/api/v1";
  const axiosInstance = axios.create({ baseURL });

  injector.set("HttpApi", new HttpApi(axiosInstance));
  injector.set("TemplateBuilderService", new TemplateBuilderService());
};

const App = () => {
  const [loading, setLoading] = useState(true);

  const initApp = useCallback(async () => {
    try {
      await initBusinessLogic();
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    initApp();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <div style={{ width: "404px", height: "469px", background: "#D9D9D94D" }}>
        <ButtonWidget verticalAlign="center" horizontalAlign="center" />
      </div>
    </Container>
  );
};

export default App;
