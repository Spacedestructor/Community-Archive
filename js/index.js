const { token, invite_url, prefix, link, file_types, id_length, links, linknum, search_negative} = require(`../js/config.json`);
const Discord = require(`discord.js`);
const client = new Discord.Client();

client.login(token);

client.on(`ready`, () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setStatus(`online`);
})

client.on(`message`, msg => {
    try {
        console.log(msg.content)
        if (msg.content === `${prefix}` + `invite`) {
            if (msg.channel.type === `dm`) {
                msg.reply(`My Invite Url: ${invite_url}`);
                console.log(`"My Invite Url: ${invite_url}" in Channel "${msg.channel.id}" (${msg.channel.type}) send to ${msg.channel.recipient} as response to "${msg.content}"`);
            }
            else { }
        }
        else if (msg.content.search(link) != search_negative && file_types.forEach(txt => msg.content.search(txt)) != search_negative) {
            linknum = parseInt(linknum);
            while (msg.content.search(link) != search_negative && file_types.forEach(txt => msg.content.search(txt)) != search_negative) {
                var numberA = msg.content.search(link);
                var numberB = msg.content.search(txt);
                numberB += txt.length;
                numberB += 1;
                var sub = txt.slice(numberA, numberB);
                linknum = links.push(sub);
            }
            console.log(`Now Stored ${linknum} Links!`)
        }
        else { }
    }
    catch (err) {
        console.log(err);
    }
});

// Webside Starts here
function getScrollbarWidth() {
    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);
    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);
    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
}
Window.addEventListener("load", function(){
    var numberWidth = this.visualViewport - scrollbarWidth
    links.forEach(link => {
        `<div><img src="${link}" width="${numberWidth}"></img></div><br>`
    });
});
