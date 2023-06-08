const BodyContent = ({ content }: { content: string }) => {
  return (
    <div
      className="ps-4 pe-4 pb-4 petitionBody min-h-50vh"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default BodyContent;
