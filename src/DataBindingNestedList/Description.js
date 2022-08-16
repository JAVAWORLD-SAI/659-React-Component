export function Description(){
    var topis =[{
         title :"Html" ,description :"ITs markup Language"},
        {title : "javascript" ,description :"its javascript library"}
    ];
    return (
             <div class="container-fluid">
                <dl>
                  {
                    topis.map(items=>
                        <>
                        <dt>{items.title}</dt>
                        <dt>{items.description}</dt>
                        </>)
                  }
                </dl>

             </div>
    )
}