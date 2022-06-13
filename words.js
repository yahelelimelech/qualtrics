let repoSite = "https://bentsileviavtau.github.io/VV/";

var welcome_block = {
    type: 'instructions',
    pages: [
        "<p>Welcome!</p> " +
        "<p>In this study, you will complete a simple task in which you will be asked to select a picture or word that is similar to the original.</p>" +
        "<p>In addition to the task, there are some questions about your beliefs, attitudes, opinions, and some standard demographic questions.</p>" +
        "<p>This study should take about 15 minutes to complete. At the end, you will recieve your result along with a PIN code. You will input this PIN code in the MTurk page to recieve your payment.</p>" +
        "<p>We thank you for being here.</p>" +
        "<p><strong>Note: This test contains several questions about your attitudes and beliefs, which are optional. No personally identifying information is collected, and all of the data collected on this site is completely confidential.</strong></p>" +
        "<p>If you wish to proceed and take the test, please click 'next'.</p>"],
    allow_keys: false,
    show_clickable_nav: true
}

var instructions_block = {
    type: "instructions",
    pages: ["<p style='font-size:0.8em;text-align:center;'>Page 1 of 2</p>" +
    "<p>In this first task, you will see an item that has three features: shape, color, and texture.</p> " +
    "<p>Subsequently, the item will disappear and you will see two items. One item shares <strong>two features</strong> with the original item, and the other shares only <strong>one feature</strong>.</p>" +
    "<p>Your task is to determine which of the two items is <strong>MORE SIMILAR</strong> to the original.</p>" +
    "<p>Please use the <strong>right arrow</strong> and the <strong>left arrow</strong> keys to select the picture or word that is more similar to the original item.</p> " +
    `<img style ='display: block; margin: auto;height: 40%;' src=  '${repoSite}ImageFiles/single1.bmp' alt='Picture'>` +
    "<p>For example, this picture is <strong>blue, heart, and spirals</strong>.</p>",
        "<p style='font-size:0.8em;text-align:center;'>Page 2 of 2</p>" +
        `<img style='display: block; margin: auto; height: 40%;'src= '${repoSite}ImageFiles/two1.bmp' alt='Picture'>` +
        "<p>In this example, the left item is similar to the original item in two features,<strong>color and shape</strong>, whereas the right item is similar to the original item only in one feature, <strong>texture</strong>.</p>" +
        "<p>Therefore, you should press the <strong>left arrow key</strong> to indicate that the left item is more similar to the original item than the right item.</p>" +
        "<p>Sometimes the item will appear as pictures, whereas in other times, they will appear as words.</p>" +
        "<p>Accuracy and speed are both important, <strong>so try to answer as fast as possible without making mistakes.</strong></p>" +
        "<p>Please start the task whenever you are ready.</p>"],
    allow_keys: false,
    show_clickable_nav: true

};

var start_block = {
    type: 'text',
    text: '<p style="text-align:center;position: relative; top: 50%;-webkit-transform: translateY(-50%);-ms-transform: translateY(-50%); transform: translateY(-50%);">Please put your fingers on the left arrow and right arrow key on your keyboard. <br> Press the <strong>right arrow</strong> key when you are ready to start.</p>',
    cont_key: [39]
}

var block = {
    type: 'same-different',

    same_key: 37,
    different_key: 39,
//timing_first_stim: 2300,
    timing_second_stim: -1,
//timing_response: 10000,
    timeline: [
        /*Put everything in the center*/
        /*Bolder plus*/
        /*Word with words, picture with pictures*/
        /*Double check if errors*/
        {stimuli: [`${repoSite}ImageFiles/word-single1.png`, `${repoSite}ImageFiles/word-two1.png`], answer: 'same'},
        {stimuli: [`${repoSite}ImageFiles/word-single2.png`, `${repoSite}ImageFiles/word-two2.png`], answer: 'same'},
        {stimuli: [`${repoSite}ImageFiles/word-single3.png`, `${repoSite}ImageFiles/word-two3.png`], answer: 'same'},
        {stimuli: [`${repoSite}ImageFiles/word-single4.png`, `${repoSite}ImageFiles/word-two4.png`], answer: 'same'},
        {stimuli: [`${repoSite}ImageFiles/word-single5.png`, `${repoSite}ImageFiles/word-two5.png`], answer: 'same'},
        {stimuli: [`${repoSite}ImageFiles/word-single6.png`, `${repoSite}ImageFiles/word-two6.png`], answer: 'different'},
        {stimuli: [`${repoSite}ImageFiles/word-single7.png`, `${repoSite}ImageFiles/word-two7.png`], answer: 'different'},
        {stimuli: [`${repoSite}ImageFiles/word-single8.png`, `${repoSite}ImageFiles/word-two8.png`], answer: 'different'},
        {stimuli: [`${repoSite}ImageFiles/word-single9.png`, `${repoSite}ImageFiles/word-two9.png`], answer: 'different'},
        {stimuli: [`${repoSite}ImageFiles/word-single10.png`, `${repoSite}ImageFiles/word-two10.png`], answer: 'different'},
        {stimuli: [`${repoSite}ImageFiles/word-single11.png`, `${repoSite}ImageFiles/word-two11.png`], answer: 'same'},
        {stimuli: [`${repoSite}ImageFiles/word-single12.png`, `${repoSite}ImageFiles/word-two12.png`], answer: 'same'},
        {stimuli: [`${repoSite}ImageFiles/word-single13.png`, `${repoSite}ImageFiles/word-two13.png`], answer: 'same'},
        {stimuli: [`${repoSite}ImageFiles/word-single14.png`, `${repoSite}ImageFiles/word-two14.png`], answer: 'same'},
        {stimuli: [`${repoSite}ImageFiles/word-single15.png`, `${repoSite}ImageFiles/word-two15.png`], answer: 'same'},
        {stimuli: [`${repoSite}ImageFiles/word-single16.png`, `${repoSite}ImageFiles/word-two16.png`], answer: 'different'},
        {stimuli: [`${repoSite}ImageFiles/word-single17.png`, `${repoSite}ImageFiles/word-two17.png`], answer: 'different'},
        {stimuli: [`${repoSite}ImageFiles/word-single18.png`, `${repoSite}ImageFiles/word-two18.png`], answer: 'different'},
        {stimuli: [`${repoSite}ImageFiles/word-single19.png`, `${repoSite}ImageFiles/word-two19.png`], answer: 'different'},
        {stimuli: [`${repoSite}ImageFiles/word-single20.png`, `${repoSite}ImageFiles/word-two20.png`], answer: 'different'},
        {stimuli: [`${repoSite}ImageFiles/word-single21.png`, `${repoSite}ImageFiles/word-two21.png`], answer: 'same'},
        {stimuli: [`${repoSite}ImageFiles/word-single22.png`, `${repoSite}ImageFiles/word-two22.png`], answer: 'same'},
        {stimuli: [`${repoSite}ImageFiles/word-single23.png`, `${repoSite}ImageFiles/word-two23.png`], answer: 'different'},
        {stimuli: [`${repoSite}ImageFiles/word-single24.png`, `${repoSite}ImageFiles/word-two24.png`], answer: 'different'},
    ],
    randomize_order: true


}

var debrief_block = {
    type: "text",
    text: function () {
        console.log("here")
        var subject_data = getSubjectData();
        if (subject_data.word_accuracy > subject_data.picture_accuracy) {
            return "<p>Your Unique ID number is <strong>" + guid + "</strong>. Please copy and paste this code to recieve your payment.</p> <p>You are now finished with the experiment. Please close this tab. Thank you!</p>";
        } else if (subject_data.word_accuracy == subject_data.picture_accuracy) {
            return "<p>Your Unique ID number is <strong>" + guid + "</strong>. Please copy and paste this code to recieve your payment.</p> <p>You are now finished with the experiment. Please close this tab. Thank you!</p>";
        } else {
            return "<p>Your Unique ID number is <strong>" + guid + "</strong>. Please copy and paste this code to recieve your payment.</p> <p>You are now finished with the experiment. Please close this tab. Thank you!</p>";
        }

    },
    cont_key: [39]
};

var timeline = [];
timeline.push(welcome_block);
timeline.push(instructions_block);
timeline.push(start_block);
timeline.push(block);

var timeline2 = []
timeline2.push(debrief_block);

var images = [`${repoSite}ImageFiles/two1.bmp`, `${repoSite}ImageFiles/two2.bmp`, `${repoSite}ImageFiles/two3.bmp`, `${repoSite}ImageFiles/two4.bmp`, `${repoSite}ImageFiles/two5.bmp`, `${repoSite}ImageFiles/two6.bmp`, `${repoSite}ImageFiles/two7.bmp`, `${repoSite}ImageFiles/two8.bmp`, `${repoSite}ImageFiles/two9.bmp`, `${repoSite}ImageFiles/two10.bmp`, `${repoSite}ImageFiles/two11.bmp`, `${repoSite}ImageFiles/two12.bmp`, `${repoSite}ImageFiles/two13.bmp`, `${repoSite}ImageFiles/two14.bmp`, `${repoSite}ImageFiles/two15.bmp`, `${repoSite}ImageFiles/two16.bmp`, `${repoSite}ImageFiles/two17.bmp`, `${repoSite}ImageFiles/two18.bmp`, `${repoSite}ImageFiles/two19.bmp`, `${repoSite}ImageFiles/two20.bmp`, `${repoSite}ImageFiles/two21.bmp`, `${repoSite}ImageFiles/two22.bmp`, `${repoSite}ImageFiles/two23.bmp`, `${repoSite}ImageFiles/two24.bmp`, `${repoSite}ImageFiles/single1.bmp`, `${repoSite}ImageFiles/single2.bmp`, `${repoSite}ImageFiles/single3.bmp`, `${repoSite}ImageFiles/single4.bmp`, `${repoSite}ImageFiles/single5.bmp`, `${repoSite}ImageFiles/single6.bmp`, `${repoSite}ImageFiles/single7.bmp`, `${repoSite}ImageFiles/single8.bmp`, `${repoSite}ImageFiles/single9.bmp`, `${repoSite}ImageFiles/single10.bmp`, `${repoSite}ImageFiles/single11.bmp`, `${repoSite}ImageFiles/single12.bmp`, `${repoSite}ImageFiles/single13.bmp`, `${repoSite}ImageFiles/single14.bmp`, `${repoSite}ImageFiles/single15.bmp`, `${repoSite}ImageFiles/single16.bmp`, `${repoSite}ImageFiles/single17.bmp`, `${repoSite}ImageFiles/single18.bmp`, `${repoSite}ImageFiles/single19.bmp`, `${repoSite}ImageFiles/single20.bmp`, `${repoSite}ImageFiles/single21.bmp`, `${repoSite}ImageFiles/single22.bmp`, `${repoSite}ImageFiles/single23.bmp`, `${repoSite}ImageFiles/single24.bmp`, `${repoSite}ImageFiles/word-two1.png`, `${repoSite}ImageFiles/word-two2.png`, `${repoSite}ImageFiles/word-two3.png`, `${repoSite}ImageFiles/word-two4.png`, `${repoSite}ImageFiles/word-two5.png`, `${repoSite}ImageFiles/word-two6.png`, `${repoSite}ImageFiles/word-two7.png`, `${repoSite}ImageFiles/word-two8.png`, `${repoSite}ImageFiles/word-two9.png`, `${repoSite}ImageFiles/word-two10.png`, `${repoSite}ImageFiles/word-two11.png`, `${repoSite}ImageFiles/word-two12.png`, `${repoSite}ImageFiles/word-two13.png`, `${repoSite}ImageFiles/word-two14.png`, `${repoSite}ImageFiles/word-two15.png`, `${repoSite}ImageFiles/word-two16.png`, `${repoSite}ImageFiles/word-two17.png`, `${repoSite}ImageFiles/word-two18.png`, `${repoSite}ImageFiles/word-two19.png`, `${repoSite}ImageFiles/word-two20.png`, `${repoSite}ImageFiles/word-two21.png`, `${repoSite}ImageFiles/word-two22.png`, `${repoSite}ImageFiles/word-two23.png`, `${repoSite}ImageFiles/word-two24.png`, `${repoSite}ImageFiles/word-single1.png`, `${repoSite}ImageFiles/word-single2.png`, `${repoSite}ImageFiles/word-single3.png`, `${repoSite}ImageFiles/word-single4.png`, `${repoSite}ImageFiles/word-single5.png`, `${repoSite}ImageFiles/word-single6.png`, `${repoSite}ImageFiles/word-single7.png`, `${repoSite}ImageFiles/word-single8.png`, `${repoSite}ImageFiles/word-single9.png`, `${repoSite}ImageFiles/word-single10.png`, `${repoSite}ImageFiles/word-single11.png`, `${repoSite}ImageFiles/word-single12.png`, `${repoSite}ImageFiles/word-single13.png`, `${repoSite}ImageFiles/word-single14.png`, `${repoSite}ImageFiles/word-single15.png`, `${repoSite}ImageFiles/word-single16.png`, `${repoSite}ImageFiles/word-single17.png`, `${repoSite}ImageFiles/word-single18.png`, `${repoSite}ImageFiles/word-single19.png`, `${repoSite}ImageFiles/word-single20.png`, `${repoSite}ImageFiles/word-single21.png`, `${repoSite}ImageFiles/word-single22.png`, `${repoSite}ImageFiles/word-single23.png`, `${repoSite}ImageFiles/word-single24.png`];
