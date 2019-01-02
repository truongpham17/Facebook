import * as React from 'react';
import { View } from 'react-native';
import { NewsTitle, NewsContent, Reaction, CommentInput } from '../common';

type Props = {
    titleDescription: ?string, // the most top title on the news feed, for example: Truong Pham and Nguyen Thi Ngoc Phuong replied to a comment
    avatar: any, // require image source
    title: string, //title for the news feed
    time: string, //time and description of the new feed
    icon: any, // require image source, small icon in the right of the time
    status: string, // description of the status
    content: React.Node, // media of the news feed, such as image or video
    reaction: Array<any>, // reaction image, such as like, smile, sad, require image source
    nameReaction: string, // for example: Truong Pham and 12 others like this
    commentReaction: string, // for example: 8 comments

}

class NewsFeed extends React.Component<Props> {

    constructor(props) {
        super(props);

    }

    render() {
        const { titleDescription, avatar, title, time, icon, status, content, reaction, nameReaction, commentReaction } = this.props;

        return (
            <View style={{ backgroundColor: '#ffffff', padding: 8 }}>
                <NewsTitle 
                    titleDescription={titleDescription}
                    avatar={avatar}
                    title={title}
                    time={time}
                    icon={icon}
                />
                <NewsContent
                    status={status}
                    content={content}
                />
                <Reaction
                    reaction={reaction}
                    nameReaction={nameReaction}
                    commentReaction={commentReaction}
                />
                <CommentInput
                    avatar={avatar}
                />

            </View>
        );
    }
}

const styles = {

}

export { NewsFeed };
