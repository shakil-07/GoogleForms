# Google Forms clone 

This project was created by Shakil Ahmed. I have created this project as an assignment on React Js and MongoDb.

## How to Install and run
1. Download the Project in Zip format(GoogleForms-master)
2. Extract the Zip file(GoogleForms-master) on your PC.
3. Run `npm i` inside (GoogleForms-master)
4. Run `npm start` to start the React server
5. Start a new cmd inside the (GoogleForms-master/server) and run the `node index.js`
6. Now open (http://localhost:3000/) inside your web browser

You can see a form like this->
![image](https://user-images.githubusercontent.com/75152633/112973835-5cd82a80-916f-11eb-9817-c06e09e1ec75.png)

You have fill up the form with Account Head Name and Account Head Type and then Submit->
![image](https://user-images.githubusercontent.com/75152633/112974191-cfe1a100-916f-11eb-828c-cad89ce60caf.png)

Open the file (GoogleForms-master/server/path/form/formData.db) to see the responses of the client

If you want to change or Update the form, go to the (GoogleForms-master/server/path/form/data.db)

For example, now the file is

`{"formName":"Test Form","formDesc":"this is a test form, only to test","data":[{"fieldname":"AccountHeadName","fieldplaceholder":"Account Head Name","fieldlabel":"Account Head Name","fieldrules":[{"required":true,"message":"This field is required"}],"fieldtype":"text"},{"fieldname":"AccountType","fieldplaceholder":"Account Type","fieldlabel":"Account Type","fieldrules":[],"fieldtype":"select","options":["Assets","Liabilities"]}],"_id":"LtMFs2EXXos2nSh5"}
`

To add a new text use:

`{"formName":"Test Form","formDesc":"this is a test form, only to test","data":[{"fieldname":"AccountHeadName","fieldplaceholder":"Account Head Name","fieldlabel":"Account Head Name","fieldrules":[{"required":true,"message":"This field is required"}],"fieldtype":"text"},{"fieldname":"Address","fieldplaceholder":"Your Address","fieldlabel":"Address","fieldrules":[{"required":true,"message":"This field is required"}],"fieldtype":"text"},{"fieldname":"AccountType","fieldplaceholder":"Account Type","fieldlabel":"Account Type","fieldrules":[],"fieldtype":"select","options":["Assets","Liabilities"]}],"_id":"LtMFs2EXXos2nSh5"}
`

And save the file. Restart the server using (Ctrl+C & `node index.js`)

Now after reloading you will see this updated form

![image](https://user-images.githubusercontent.com/75152633/112975495-5b0f6680-9171-11eb-81a9-3a70bae699a8.png)

