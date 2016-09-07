# slackbot-pingdom
A slackbot to push pingdom messages.

## NGINX & NODE & EXPRESS for Slack - Pingdom notifications.

### Files that need to be configured
* config/nginx - (domain specific data should be switched and ssl possibly setup) symlink to your /nginx/sites-enabled/ dir.
* config/pm2.json -port specific settings
* bin/pingdom - port specific settings
* routes/index.js - default POST view has hard coded paths to SLack push url.


### Run this thing

#### PM2
pm2 start config/pm2.json

#### NPM
npm start


### Contributions
Welcome, want to create a central config, testing or enhance pingdom data that is sent, send a pull request. 

Thanks
TCR
