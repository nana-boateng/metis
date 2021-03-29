export default function Card({ colour, style, ...props }) {
  return (
    <div className={`h-1/3 bg-${colour} w-1/4 mx-auto p-3 ${style}`}>
      {props.children}
    </div>
  );
}
