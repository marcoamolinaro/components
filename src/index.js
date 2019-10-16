import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Marco" 
                timeAgo="Today at 04:45PM" 
                commentText="Nice blog post!"
                avatarImage={faker.image.avatar()} 
            />                   
            <CommentDetail 
                author="Carmen" 
                timeAgo="Today at 04:50PM" 
                commentText="Prety good!" 
                avatarImage={faker.image.avatar()} 
            />                   
            <CommentDetail 
                author="Sofia" 
                timeAgo="Today at 05:45PM" 
                commentText="That's great!" 
                avatarImage={faker.image.avatar()} 
            />                                     
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

