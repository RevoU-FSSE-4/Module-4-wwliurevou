import { FormWrapper } from "./FormWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="Address">
      <label>Street Address</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        className={` rounded-lg border text-[#a16353] hover:border-[#02295a] focus:border-white focus:ring-[#bfe2fd]`}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        value={city}
        className={` rounded-lg border text-[#a16353] hover:border-[#02295a] focus:border-white focus:ring-[#bfe2fd]`}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label>State</label>
      <input
        required
        type="text"
        value={state}
        className={` rounded-lg border text-[#a16353] text-[15px] hover:border-[#02295a] focus:border-white focus:ring-[#bfe2fd]`}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label>Zip Code</label>
      <input
        required
        type="number"
        value={zip}
        className={` rounded-lg border text-[#a16353] hover:border-[#02295a] focus:border-white focus:ring-[#bfe2fd]`}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
}
