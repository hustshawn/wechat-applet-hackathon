Page({
    data: {
        eventTitle: 'Tentative Agenda',
        eventArray: [
            {
                timeText: '1:45 pm',
                detail: 'Gathering at One Island East, Taikoo Place'
            },
            {
                timeText: '2:00~2:20 pm',
                detail: 'Welcome and self-introduction'
            },
            {
                timeText: '2:20~3:00 pm',
                detail: 'Knowledge sharing on Wechat Applet'
            },
            {
                timeText: '3:00~3:30 pm',
                detail: 'Idea discussion and team up'
            },
            {
                timeText: '3:30~6:30 pm',
                detail: 'Hack event'
            },
            {
                timeText: '6:30~7:00 pm',
                detail: 'Presentation'
            }
        ]
    },

    onLoad: function() {
        wx.setNavigationBarTitle({
            title: 'Rundown'
        })
    }
})