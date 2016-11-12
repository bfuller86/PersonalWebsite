# My Personal Website
A website to display my portfolio/resume

### Getting Started (Windows)
- Ensure that the latest versions of Node.js and Ruby are installed.
- Open a new command prompt (with Ruby)
- Navigate to your working directory
- Run "npm install"
- Run "gem install sass"
- Run "grunt watch" (NOTE: this command is the only one needed for future development. The ones above it only need to be done one time)
- After running "grunt watch" this command prompt should stay open and generally be left alone while you develop, as it is now running a background task. To exit the background task, use the command Ctrl+c.

### What You Get
After any change in non-auto-generated files (index.html, GruntFile.js, app/*, etc) the website should be compiled, concatenated, minified, and moved to the folder:
```
<working directory>/build
```

Deployment and web hosting are not done for you. The files must be deployed and hosted through other means/manually.

### Recommended Test Environment (Windows)
- Open a new command prompt and navigate to your working directory
- (Optional) If you would like to test the fully minified production version of the code, navigate to the build folder within your working directory. 
- (Optional) NOTE: this folder will not exist until the grunt watch task has run and completed successfully.
- Run "npm install http-server -g"
- Run "http-server" (NOTE: this command is the only one needed for future development. The ones above it only need to be done one time)
- This command prompt should stay open and left alone while you develop, as it is now running a background task. To exit the background task, use the command Ctrl+c.
