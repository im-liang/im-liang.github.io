#### Note:

* Node.js 8.2.0 or higher which brings you npm 5.2.0 which brings you npx

* The instruction uses Angular-cli

## Install [angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages)

`npm i angular-cli-ghpages --save-dev`

## Build the app at `dist` folder with appropriate github page url

`ng build --prod --base-href "https://{{ username }}.github.io/{{ repo name }}/"`

## Deployment

### Test Deployment

`ngh --dry-run` to see the result pages locally before deploying to the cloud

### Deploy to default branch

`npx ngh`

### Deploy to specific branch

`npx ngh --branch={{ branch name }}`

