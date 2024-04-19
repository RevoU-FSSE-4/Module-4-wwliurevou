import * as yup from 'yup';

export const personalInfoSchema = yup.object().shape({
   firstName: yup.string().required('Required'),
   lastName: yup.string().required('Required'),
   email: yup.string(),
});

// export const isFieldRequired = (fieldName: string): boolean => {
//   const field = schema.describe().fields[fieldName] as any;
//   return field.tests.some((item: any) => item.name === 'required') ?? false;
// };