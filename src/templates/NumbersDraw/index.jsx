import { InputNumber } from '../../components/InputNumber';

export const NumbersDraw = () => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <p style={{ marginTop: '10px' }}>
        Sortear <InputNumber /> número(s) entre:
      </p>
      <InputNumber />
      e
      <InputNumber />
    </div>
  );
};
