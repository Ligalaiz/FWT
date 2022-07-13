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

interface IAcc {
  [key: string]: string;
}

const serializeData = ({ resPaints, resLocations, resAuthors }: ISerializeData): IData[] => {
  const locationMap = resLocations.reduce(
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

  return resPaints.reduce((acc: IData[], item: IResPaints) => {
    return [...acc, { ...item, author: authorsMap[item.authorId], location: locationMap[item.locationId] }];
  }, []);
};

export { serializeData };
