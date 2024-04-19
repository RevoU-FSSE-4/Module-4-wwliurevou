import { FormWrapper } from "./FormWrapper";

type AccountData = {
  username: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({
  username,
  password,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWrapper title="Account Creation">
      <label className="text-purple-500">Username</label>
      <input
        autoFocus
        required
        type="username"
        value={username}
        onChange={(e) => updateFields({ username: e.target.value })}
      />
      <label className="text-purple-500">Password</label>
      <input
        required
        type="password"
        value={password}
        autoComplete="on"
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
