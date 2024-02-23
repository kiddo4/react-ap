interface props {
  text: string;
}

function Button({ text }: props) {
  return <button className="btn btn-primary">{text}</button>;
}

export default Button;
