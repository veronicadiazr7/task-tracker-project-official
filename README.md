# official-task-tracker
 Task Tracker APP using Node.js, Express, EJS as template engine
 
# General Process of making the app
I first set the server to be hosted on the port in the local host. Then proceeded to play with some sample JSON data to test the fs.readFile and fs.writeFile along with RESTful APIs. I was able to achieve it with sample data, but when it came to applying it to the task tracker it became too complicated for me to achieve. I tried to apply some recommendations mentioned in class such as having a js file to fetch the data from the client's side, and in the second file having the server and functions we want in the task tracker. When creating the task tracker route I proceeded in the following order:
- app. get to display the tasks on the screen and check if everything was working correctly
- app. post to post and remove any task that the user either entered by mistake or had already completed. Using the "he res. redirect() function” which redirects to the URL derived from the specified path, was used so the user would always stay in the same path when adding a task instead of being taken to another path. 
- After adding the paths I added JS validation in case the user had not entered a task it wouldn't appear as a blank item in the list, so in this case, the user was redirected to another page that displays that the user must enter the task, the user can then go back and continue with the already written tasks. 

#New Things I learned through the project
I was able to learn to work with my first template engine, EJS, I still don’t understand it completely but it’s because of the change in syntax. I want to keep implementing it on my next projects and learn about other template engines. 
In the journey of trying several methods to achieve the application I came across using localStorage instead of the server, I also learned how to use Postman as a platform to test the APIs in a much simpler way. Additionally, I learned the basics of MongoDB and Mongoose, which are very useful tools that I also want to keep learning about and implement in future projects despite being a bit complicated. 

#Problems encountered

- Not able to make available for the clients side to make edits to a task they post
- Not able to make the task tracker write a JSON file with each task that is added to the tracker. likewise to remove the task from the file.
- Wasn’t able to Deploy the application through AWS Amplify due to using EJS as a template engine, so proceeded to try to deploy it as an EC2 instance but wasn't successful after many tries. Some of the tutorials I followed were the following: 
     -https://sumantmishra.medium.com/securely-ssh-into-aws-ec2-linux-instance-42ad8a322ac5
     -https://betterprogramming.pub/deploying-a-basic-express-api-on-amazon-ec2-eea0b54a825
     -https://www.youtube.com/watch?v=oHAQ3TzUTro&t=42s
- Adding media queries to the application became an issue due to being my first time using EJS as a template engine. 

#Overall thoughts

Despite not being able to achieve this project's principal end goal, I could apply different tools that were completely new for me in the final output of the project as well as my many tries. While developing the application I realized the progress that I’ve made when approaching mistakes or problems, I now have a better understanding of troubleshooting and looking up possible mistakes that could've been the reason for the error. The project was very challenging for me, but it keeps me wanting to push forward so one day with more knowledge  I will be able to achieve it. 
