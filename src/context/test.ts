type test = {
  [key: string]: string;
  [field: string]: string;
};

type User = Record<string, Info>;
type Info = {
  site: string;
  name: string;
};
