
export default function AtriclePage(props) {
  let title = props.params.title;
  return(
    <div>
      <h1>Article Page</h1>
      <h2>{title}</h2>
    </div>
  )
};
