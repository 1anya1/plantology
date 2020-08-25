website: https://plantology.herokuapp.com/blogs

*Technologies Used:
HTML(Views)
JavaScript (Models, server.js)
Node.js - to run JS file outside of browser
Mongo DB - created a database plantology with subdatabase called blogging
Mongoose - stored Schemas for my blog object 
React -  used to build interface of my app 
Express and package.json - used them as libraries/ frameworks
git push 

#Approach:
The goal of plant-ology app is for users to search the website to find information specific to indoor plant species, their care, and generalls information about house plants. My approach was to create a home page that houses all of the blogs that are displayed in a card format. By displaying basic information (photo and the title) the user can quickly find what they are looking for. I used grid layout in order to display the cards in this way. 

I wanted the user to be able to edit or delete the blog once they were on the page. I incorporated the delete button at the bottom of the blog page and an EDIT BLOG link at the top of the navigation. 

To create the each blog page I used from and with bootstrap I was able to lay them out accordingly. I used bootstrap for both edit/new blog entries. All of the information that was entered is housed in mongoose a mongo database

To create user-friendly interaction, I added nav bar to all of my pages so the user can swiftly move from page to page. 

In addition to the blog page I added about us page where the user can learn more about plant-logy.

I wanted to make the site pop so I used a color pallet of 3 to tie the design together. I added hovering effects to the nav bar and to the 

#Unsolved Problems:
-Add a search bar to search the webpage for specific key words
-Add tags for each blog post so they will be saved to a specific library
-Update homepage so it will allow the user to choose the categories of blogs( i.e plant care, plant id, plant disease/ pests etc)
-Have a log in for people as users and as contributors. Contributors must log in to delete or update their blog post
-Make blog post writing more user friendly. Instead of implementing <textarea> that is very limiting, I would like to add a robust form/ page where contributors can add blog posts to. 
-Make the app compatible with any viewing device (smart phones, tables, etc).

Challenging Issues:
-Styling with normalize.css and skeleton.css and bootstrap was very hard for me. I ended up using only bootstrap for my pages and normalize.css
-Creating blog pages, ran into an issue with <textarea> that would not allow me to format the paragraph and I was not able to find a solution for it yet. 
-Styling the layout was a problem with photos since all of the photos that I pulled from online were a different dimension. 
-Ran into an issue with my models. Since my blogSchema in the beginning had a whole bunch of objects and arrays it was difficult to work with and I struggles to get the javascript to work. I ended up stripping it down just to strings.

