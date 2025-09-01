export const LogoCard = ({ imageSrc, imageAlt, imageCaption }) => {
  return (
    <figure>
      <img src={imageSrc} alt={imageAlt} />
      <figcaption className="mt-2">
        {imageCaption}
      </figcaption>
    </figure>
  );
};
