import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div><h4>Warning!</h4></div>
                Are you sure you want to do this?
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Marco" 
                    timeAgo="Today at 04:45PM" 
                    commentText="Nice blog post!"
                    avatarImage={faker.image.avatar()} 
                />     
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Carmen" 
                    timeAgo="Today at 04:50PM" 
                    commentText="Prety good!" 
                    avatarImage={faker.image.avatar()} 
                />    
            </ApprovalCard> 

            <ApprovalCard>             
                <CommentDetail 
                    author="Sofia" 
                    timeAgo="Today at 05:45PM" 
                    commentText="That's great!" 
                    avatarImage={faker.image.avatar()} 
                />   
            </ApprovalCard>                                   
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

