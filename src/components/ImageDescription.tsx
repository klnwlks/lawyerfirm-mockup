import type { Component } from "solid-js";

interface IProps {
  title?: string
  text: string
  img: string
}

const ImageDescription: Component<IProps> = (props: IProps) => {
  return (
    <div class='relative mx-2 flex-none w-full '>
      <img class='object-cover h-full w-full rounded-xl' src={props.img}/>
      <div class='absolute bottom-0 p-4 text-white bg-gradient-to-b
                  from-transparent to-rbl w-full'>
        <p class='text-2xl'>{props.title}</p>
        <p class='hidden'>{props.text}</p>
      </div>
    </div>
  )
}

export default ImageDescription;
