(function() {
    var getHere = function() {
        return new Date();
    };

    var getThere = function() {
        var now = new Date();
        return new Date(now.getTime() + 1 * 60 * 60 * 1000);
    };

    var getTime = function(now) {
        var hour = now.getHours();
        var minute = now.getMinutes();
        if(minute < 10) {
            minute = '0' + minute;
        }
        return hour + ':' + minute;
    };

    var getDate = function(now) {
        var month = now.getMonth() + 1;
        var date = now.getDate();
        return month + '/' + date;
    };

    var updateClock = function() {
        var here = getHere();
        var there = getThere();
        $('#here .time').html(getTime(here));
        $('#here .date').html(getDate(here));
        $('#there .time').html(getTime(there));
        $('#there .date').html(getDate(there));
    };

    var fadeInAll = function() {
        var items = [
            $('#here .place'),
            $('#here .time'),
            $('#here .date'),
            $('#there .place'),
            $('#there .time'),
            $('#there .date'),
            $('#love-words-title'),
            $('#love-words-content'),
        ];

        var idx = 0;
        var token = setInterval(function() {
            if(idx >= items.length) {
                clearInterval(token);
                return;
            }
            items[idx].fadeTo('slow', 1);
            ++ idx;
        }, 300);
    };

    var putLoveWords = function() {
        var loveWords = {
            '8/30': 'I will miss my little short hair girl.',
            '8/31': "Don't cry for me baby. I will be back very soon.",
            '9/1': 'Watashi love anata so much.',
            '9/2': 'The One Kisses You Ought to be me.',
            '9/3': "How about going to Disney Land with me in the future?",
            '9/4': 'There are gifts for you!',
            '9/5': 'Sorry for leaving again. I will be back soon too.',
            '9/6': 'Imagining our marriage life makes me so satisfied.',
            '9/7': 'Love is you, and you are my love.',
            '9/8': 'Wish you a happy Moon Festival.',
            '9/9': 'I am back again : )',
            '9/10': 'Happy birthday!',
        };

        var today = loveWords[getDate(getHere())];
        if(today == undefined) {
            today = 'It feels so good that we are in the same city.';
        }
        $('#love-words-content').html(today);
    };

    updateClock();
    setInterval(updateClock, 5000);
    putLoveWords();
    fadeInAll();
})();

