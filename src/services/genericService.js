import { navItems } from "../utils/constants";
import { getStates } from "./searchService";

const getPathFromName = (name = "") => {
  return name.toLowerCase().trim().replace(/\s/g, "-");
};
export const getNavItems = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const states = await getStates();
      resolve(
        navItems.map((page, index) => ({
          id: index + 1,
          label: page,
          to: getPathFromName(page),
          state: { states },
        }))
      );
    } catch (error) {
      reject(error);
    }
  });
};
