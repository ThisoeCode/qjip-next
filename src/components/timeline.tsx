export default function Timeline({
  children,
  hasNextLine=false,
  pinkTitle,
}:{
  children:React.ReactNode,
  hasNextLine?:boolean,
  pinkTitle:string,
}){
  return<li>
    {hasNextLine&&<i className="za_timeline"/>}
    <i className="pink_title">
      <i/><hr/>
      <p>{pinkTitle}</p>
    </i>
    <article>{children}</article>
  </li>
}