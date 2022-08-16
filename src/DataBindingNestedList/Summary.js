

export function Summary(){
var menu =[{
    title :"HTML",description :"Markup"},
    {title : "React", description :"Library"} 
];

    return (
        <div class="container-fluid">
            {
                menu.map(item =>
                    <details>
                        <summary>{item.title}</summary>
                        <summary>{item.description}</summary>
                    </details>
                    )
            }
        </div>
    )
}