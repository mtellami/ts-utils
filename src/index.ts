import { Catch, toJson } from "./functinons";
import { asyncCatch } from "./functinons/asyncCatch";

(async () => {
  const [res, err] = await asyncCatch(async () => "value");
  console.log(res, err);
})();
