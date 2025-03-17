export default function Image({src,...rest}) {
  src = src && src.includes('https://')
    ? src
    : 'http://localhost:4000/uploads/'+src;
    console.log('Image src:', src); // Debugging the src value
  return (
    <img {...rest} src={src} alt={''} />
  );
}