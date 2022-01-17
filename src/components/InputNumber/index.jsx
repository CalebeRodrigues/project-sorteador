export const InputNumber = () => {
  return (
    <input
      type="number"
      min="0"
      max="999999999"
      style={{
        fontSize: '24px',
        height: '40px',
        width: '80px',
        margin: '20px',
        textAlign: 'center',
        border: '1px solid gray',
        backgroundColor: 'transparent',
      }}
    />
  );
};
