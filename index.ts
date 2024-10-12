import "module-alias/register";
import { ENV, app } from "@config";
import { RAISE_NOTICE } from "@utils";
import AppRoutes from "@routes";

app.use("/api", AppRoutes);

app.listen(ENV.PORT, () => {
  RAISE_NOTICE("warn", `This is ${process.env.NODE_ENV} mode.`);
  RAISE_NOTICE("info", `App running on ${ENV.PORT}`);
});
