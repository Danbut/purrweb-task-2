import {ValidationError} from 'yup';

export const getErrorsObjectFromYup = (
  fields: string[],
  errors: ValidationError,
): {
  [k: string]: string;
} => {
  const obj = {};

  fields.forEach(f => {
    Object.assign(obj, {
      [f]: errors.inner.find(o => f === o.path)?.message ?? '',
    });
  });

  return obj;
};
