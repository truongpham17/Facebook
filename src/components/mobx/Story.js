import { observable, action, autorun, reaction } from 'mobx';

class Story {
    @observable isShowStoryCard = false;
    @observable isDismissFloatView = false;
    @observable number = 2;
    
    initValueStoryInfo = {
        avatar: null,
        contentImg: null,
        time: '',
        title: ''
    }
    @observable storyInfo = { ...this.initValueStoryInfo }

    @observable isShowDialog = false;

    setIsShowDialog(value) {
        this.isShowDialog = value;
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

    setDismissFloatView(value) {
        this.isDismissFloatView = value;
    }


    closeCard() {
        this.isShowStoryCard = false;
        this.isDismissFloatView = true;
        this.storyInfo = { ...this.initValueStoryInfo };
    }
    openCard(value) {
        this.isShowStoryCard = true;
        this.isDismissFloatView = false;
        this.storyInfo = { ...value };
    }
}

export default Story;
