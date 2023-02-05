import type { Component } from "solid-js";

interface IProps {
  title?: string
  text: string
  img: string
}

const ImageDescription: Component<IProps> = (props: IProps) => {
  return (
    <div>
      <img src={props.img}/>
      <div>
        <p>{props.title}</p>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default ImageDescription;
