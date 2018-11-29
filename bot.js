client.on('message', message => {
       if (message.content ==='اهلين وسهلين') { 
            message.reply('هلا');
          }
});


client.login(process.env.BOT_TOKEN);
