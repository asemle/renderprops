import React, { Component } from 'react';
import PropTypes from 'prop-types';

const data = [
    { title: "Ant Design Title 1", Text: "Ant Design, a design language for background applications, is refined by Ant UED Team" },
    { title: "Ant Design Title 2", Text: "Ant Design, a design language for background applications, is refined by Ant UED Team" },
    { title: "Ant Design Title 3", Text: "Ant Design, a design language for background applications, is refined by Ant UED Team" },
    { title: "Ant Design Title 4", Text: "Ant Design, a design language for background applications, is refined by Ant UED Team" },
]

function ListDemo2() {
    return <div className="listDemo2">
        <List data={data} renderItem={
            (item) => (
                <div className="cardInner">
                    <div className="cardAvatar">
                        <span><img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/></span>
                    </div>
                    <div>
                         <ListItem renderTitle={
                             () => <div className="cardTitle">{item.title}</div>
                         } renderText={
                             () => <div className="cardText">{item.Text}</div>
                         }
                         />
                    </div>
                </div>
            )
        } />
    </div>
}

function List(props) {
    const items = props.data.map(props.renderItem)
    return <div>{items}</div>
}

function ListItem(props) {
    return (
        <div className="card">
            {props.renderTitle(props.title)}
            {props.renderText(props.text)}
        </div>
    )
}

List.propTypes = {
    data: PropTypes.array
}

export default ListDemo2;