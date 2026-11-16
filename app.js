
const parent = React.createElement ("div",
     {id : "parent"},
    React.createElement (
        "div",
         {id : "child"},
   [React.createElement ("h1" , {}, "Im an h1 tag"),
     React.createElement ("h1" , {}, "Im an h1 tag")]
    )
)
);

root.render( parent);