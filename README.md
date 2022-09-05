# jsoner
In develop branch I added backend to log events about application in a server folder location. To accomplish this ı used node and express, you can find in server folder of branch. I used winston as a logger.

![image](https://user-images.githubusercontent.com/75986477/188502949-293b7963-2758-4a70-a315-4fd140d5e106.png)



Basic react page for genarating json file from selected inputs. Made for creating templates to use in devops line.

npm install
npm start

![image](https://user-images.githubusercontent.com/75986477/188308945-22361120-89f6-4bc2-9a60-fa5b69d7ebfd.png)

I hosted both backend and frontend in IIS.
For frontend, place your build folder (create with this coomand -> npm run build) in inetpub\yourwebsite, then create application pool and website in IIS manager.
For backend, place server folder under the inetpub\yourwebsite, then create a web application in your website via IIS manager, then give server folder as a path. To configure IIS as reverse proxy you need to install the URL Rewrite extension and the Application Request Routing extension. Add the address of your node.js website, don't forget to include the port, to the reverse proxy rules.

![image](https://user-images.githubusercontent.com/75986477/188503647-3518a8b4-581c-4521-8ebd-21b0bdc0df7c.png)
