import React, { Component } from 'react';
import PropTypes from 'prop-types';

const data = [
    { title: "Title 1", Text: "Text 1" },
    { title: "Title 2", Text: "Text 2" },
    { title: "Title 3", Text: "Text 3" },
    { title: "Title 4", Text: "Text 4" },
    { title: "Title 5", Text: "Text 5" },
]

function ListDemo() {
    return <div className="listDemo">
        <List data={data} renderItem={
            (item, i, arr) => (
                
                <ListItem index={arr.length - 1 === i ? "lastIndex" : "index" + i} renderText={
                    () => <div>{item.Text}</div>
                }
            />
            )
        }/>
        </div>
}

function List(props) {
    const items = props.data.map(props.renderItem)
    return <div>{items}</div>
}

function ListItem(props) {
    return (
        <div className={props.index + ' card'}>
            
            {props.renderText(props.text)}

        </div>
    )
}

List.propTypes = {
    data: PropTypes.array
}

export default ListDemo;

// function ListDemo() {
//     return <div className="listDemo">
//         <List data={data} renderItem={
//             (item) => (
//                 <ListItem renderTitle={
//                     () => <div>{item.title}</div>
//                 } renderText={
//                     () => <div>{item.Text}</div>
//                 }
//                 />
//             )
//         } />
//     </div>
// }

// function List(props) {
//     const items = props.data.map(props.renderItem)
//     return <div>{items}</div>
// }

// function ListItem(props) {
//     return (
//         <div className="card">
//             {props.renderTitle(props.title)}
//             {props.renderText(props.text)}
//             <footer><button>Like</button></footer>
//         </div>
//     )
// }