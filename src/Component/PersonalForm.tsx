import { FormWrapper } from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
};

type userFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function PersonalForm({
  firstName,
  lastName,
  email,
  dob,
  updateFields,
}: userFormProps) {
  return (
    <FormWrapper title="User Details">
      <label className=" text-purple-500">First Name</label>
      <input
        autoFocus
        placeholder="e.g. John"
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label className=" text-purple-500">
        Last Name
      </label>
      <input
        required
        placeholder="e.g. Doe"
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label className=" text-purple-500">Email</label>
      <input
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label className=" text-purple-500">Date of Birth</label>
      <input
        required
        type="Date"
        value={dob}
        onChange={(e) => updateFields({ dob: e.target.value })}
      />
    </FormWrapper>
  );
}
