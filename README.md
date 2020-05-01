Liferay Resort Application using React JS and Liferay DXP

the steps are as follows -
1. Import the structures into your Liferay instance. Structure can be found in the same repo
https://github.com/samirpatel24/liferay-react-example/tree/master/Content%20structures
2. Import all the contents->  banner, resort rooms, blogs etc if you want to avoid creating it all again.
LAR Location -> https://github.com/samirpatel24/liferay-react-example/tree/master/Content%20LAR
3. You can add portal-cors-configuration in the system setting -> Security tools of Liferay to avoid cors blocking issue or disable it locally at the browser level.
4. Refer .env file in the project and update the properties with your local/cloud Liferay environment values
https://github.com/samirpatel24/liferay-react-example/blob/master/.env
5. And now you can run the react-app locally. I have also deployed it to netlify. https://liferayresort.netlify.app. This actually helps me in deploying continuos changes to the app.
Done!