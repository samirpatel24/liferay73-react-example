Liferay Resort Application using React JS and Liferay DXP

To get the application working you can do the following:
1. Create a `Service Account` role
1. Apply `View Permissions` for Web Content and Blogs for this role
1. Create a `Service Acount` user and give it the `Service Account` role
1. Import all the contents like banner, resort rooms, blogs from the repo ==> tree/master/Content%20LAR
1. Add `Portal Cross-Origin Resource Sharing (CORS)` entry [IMAGEHERE]
1. Update the .env file to your Liferay DXP instance
1.1
1. Refer .env file in the project and update the properties with your local/cloud Liferay environment values
https://github.com/samirpatel24/liferay-react-example/blob/master/.env
1. And now you can run the react-app locally. I have also deployed it to netlify. https://liferayresort.netlify.app. This actually helps me in deploying continuos changes to the app.
Done!

