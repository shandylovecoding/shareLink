// import React from 'react'


export default function Linklist(props) {
    console.log(props);
   
    
        const renderLinkList = props.links.map((link, i) => {
            return (
                <div key={i}>
                    <a href={link.url}>{link.name}</a>
                    {link.tags.map((tag,j)=><span key={j}>{tag.name}</span>)}
                </div>
            )
        })
        return <div>{renderLinkList}</div>
    }
