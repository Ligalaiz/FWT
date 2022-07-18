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

interface IFilterData {
  data: IData[];
  searchValue: string;
  selectedLocation: string;
  selectedAuthor: string;
  selectedFrom: string;
  selectedBefore: string;
}

const checkString = (field: string, req: string) => {
  const regSearch = new RegExp(req, 'gi');
  return !!field.match(regSearch);
};

const checkDate = (reqFrom: string, reqBefore: string, param: string) => {
  if (reqFrom && reqBefore) return param >= reqFrom && param <= reqBefore;
  if (reqFrom) return param >= reqFrom;
  if (reqBefore) return param <= reqBefore;

  return false;
};

const filterData = (props: IFilterData) => {
  const { data, ...checkFields } = props;
  const fields: { [key: string]: string } = { ...checkFields };

  if (Object.keys(fields).every((item) => fields[item] === '')) return data;

  const checkParam = Object.keys(fields).reduce((res: { [key: string]: string }, field: string) => {
    if (fields[field] !== '') res[field] = fields[field];
    return res;
  }, {});

  const result = data.filter((paint) => {
    let isChecked = true;

    if (checkParam.searchValue) {
      const fieldsForCheck = [paint.author, paint.location, paint.name];
      isChecked = fieldsForCheck.some((item) => checkString(item, checkParam.searchValue));
      if (!isChecked) return isChecked;
    }

    if (checkParam.selectedLocation) {
      isChecked = checkString(paint.location, checkParam.selectedLocation);
      if (!isChecked) return isChecked;
    }

    if (checkParam.selectedAuthor) {
      isChecked = checkString(paint.author, checkParam.selectedAuthor);
      if (!isChecked) return isChecked;
    }

    if (checkParam.selectedFrom || checkParam.selectedBefore) {
      isChecked = checkDate(checkParam.selectedFrom, checkParam.selectedBefore, paint.created);
      if (!isChecked) return isChecked;
    }

    return isChecked;
  });

  return result;
};

export { filterData };
