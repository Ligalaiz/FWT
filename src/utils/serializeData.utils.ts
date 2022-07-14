interface ServerResponse {
  [key: string]: any;
}
interface ISerializeData {
  resPaints: ServerResponse;
  resLocations: ServerResponse;
  resAuthors: ServerResponse;
}

interface IResPaints {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
  [key: string]: string | number;
}

interface IData {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
  author: string;
  location: string;
  [key: string]: string | number;
}

interface IResult {
  data: IData[];
  locations: { [key: string]: string };
  authors: { [key: string]: string };
}

interface IAcc {
  [key: string]: string;
}

const serializeData = ({ resPaints, resLocations, resAuthors }: ISerializeData): IResult => {
  const locationsMap = resLocations.reduce(
    (
      acc: IAcc,
      cur: {
        id: number;
        location: string;
      },
    ) => {
      acc[cur.id] = cur.location;
      return acc;
    },
    {},
  );

  const authorsMap = resAuthors.reduce(
    (
      acc: IAcc,
      cur: {
        id: number;
        name: string;
      },
    ) => {
      acc[cur.id] = cur.name;
      return acc;
    },
    {},
  );

  const data = resPaints.reduce((acc: IData[], item: IResPaints) => {
    return [...acc, { ...item, author: authorsMap[item.authorId], location: locationsMap[item.locationId] }];
  }, []);

  return {
    data,
    locations: locationsMap,
    authors: authorsMap,
  };
};

export { serializeData };
