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
    <i className={hasNextLine?"za_timeline":"last_line"}/>
    <i className="pink_title">
      <i/><hr/>
      <p>{pinkTitle}</p>
    </i>
    <article>{children}</article>
  </li>
}