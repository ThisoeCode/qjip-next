export default function Timeline({
  children,
  hasNextLine=false,
  pinkTitle,
}:{
  children:React.ReactNode,
  hasNextLine:boolean,
  pinkTitle:string,
}){
  return<section>
    {hasNextLine&&<i className="za_timeline"/>}
    <div>
      <i className="dot"/>
      <hr/>
      <p>{pinkTitle}</p>
    </div>
    <article>{children}</article>
  </section>
}