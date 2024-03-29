// method -> obj

const video = {
    title: 'a',
    play() {
        console.log(this)
    }
}

video.play()  // {title: 'a', play: ƒ}

video.stop = function() {
    console.log(this)
}

video.stop() // {title: 'a', play: ƒ, stop: ƒ}


/* ------------ ENd of method --------- */

// function -> global (window)

function playVideo() {
    console.log(this) // This:onhover => if you see any value in VScode it is window object
}

playVideo(); // it refers to a window object

const obj = {
    video: 'a',
    tags : ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.video, tag)
        }, this)
    }
}; 

obj.showTags();

/*
a a
a b
a c
*/