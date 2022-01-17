export const TextArea = ({ ...props }) => {
  return (
    <textarea
      style={{
        height: '300px',
        width: '100%',
        marginBottom: '5px',
        padding: '5px',
        fontSize: '18px',
        scrollMarginBottom: true,
        resize: 'none',
      }}
      {...props}
    ></textarea>
  );
};
