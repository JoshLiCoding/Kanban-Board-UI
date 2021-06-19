# kanban-ui
All technical code and writup are my own, although general aspects I have discussed with a family member. Credits to online sources are provided where they are due.

## Installation (Mac)
1. Install [Kanban API](https://github.com/Garrett-Freddo/kanban-api) locally (follow instructions on page)
2. Open terminal and input "cd Desktop"
3. Clone repository
4. Navigate to "my-app" folder, create new terminal at folder
5. Run "npm install"
6. Run "npm start"

The result will resemble this:
![image](https://user-images.githubusercontent.com/43073270/122647397-1224d980-d0f2-11eb-95db-33fc386777a4.png)

## Approach
Front-end ReactJS corresponds with the back-end Kanban API (with MongoDB server) through the Fetch API. Material UI is also utilized with ReactJS.

Some aspects inspired by the To-Do Board on Notion

## Architecture
Single webpage, tasks within columns.

## Functions
- Named columns (To-Do, In Progress, Complete, In Review)
- Ability to add and delete tasks to a column
- Tasks include title, assignee (user) and description

CANNOT drag and drop tasks from one column to another.

## Challenges
After dedicating several hours on Friday to debug the Kanban API (to no avail), I posted the following [GitHub issue](https://github.com/Garrett-Freddo/kanban-api/issues/1) (snippet below). The author has since provided clarifications on the issue.
![image](https://user-images.githubusercontent.com/43073270/122647681-6f6d5a80-d0f3-11eb-9cfc-fa50151757d9.png)

## Video
Version 1: https://www.youtube.com/watch?v=vd2z0qbwhTE

Version 2 (WATCH): https://www.youtube.com/watch?v=pUUmuLT67uI (note: I meant "title", not "name", at 4:25)
