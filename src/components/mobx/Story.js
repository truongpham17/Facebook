import { observable, action, autorun } from 'mobx';

class Story {
    @observable isShowStoryCard = false;
    @observable number = 2;
    @observable storyInfo = {
        avatar: null,
        contentImg: null,
        time: '',
        title: ''
    }

    setNumber(value) {
        this.number = value;
    }

    setIsShowStoryCard(value) {
        this.isShowStoryCard = value;
    }

    setStoryInfo(value) {
        this.storyInfo = { ...value };
    }

    debug = autorun(() => {
        console.log(this.number);
    });
}

export default Story;
