# Kanban-Board-UI
I was given the task to create a functional Kanban board as part of the interview process at Pensieve (a research workflow automation startup). Save the drag-and-drop feature, I satisfactorily created a product that:

- Contains named columns (To-Do, In Progress, Complete, In Review)
- Has the ability to add and delete tasks in a column
- Displays tasks include title, assignee (user) and description

Used React.js that communicated with the provided back-end Kanban API (on MongoDB server) through the Fetch API. Material UI is also employed

## Installation (Mac)
1. Install [Kanban API](https://github.com/Garrett-Freddo/kanban-api) locally (follow instructions on page)
2. Open terminal and input "cd Desktop"
3. Clone repository
4. Navigate to "my-app" folder, create new terminal at folder
5. Run "npm install"
6. Run "npm start"

The result will resemble this:
![image](https://user-images.githubusercontent.com/43073270/122647397-1224d980-d0f2-11eb-95db-33fc386777a4.png)

## Credits
All technical code and writup are my own, although general aspects I have discussed with a family member. Credits to online sources are provided where they are due.
Some aspects inspired by the To-Do Board on Notion

## Architecture
Single webpage, tasks within columns

## Challenges
After dedicating several hours on Friday to debug the Kanban API (to no avail), I posted the following [GitHub issue](https://github.com/Garrett-Freddo/kanban-api/issues/1) (snippet below). Clarifications has since been provided on the issue
![image](https://user-images.githubusercontent.com/43073270/122647681-6f6d5a80-d0f3-11eb-9cfc-fa50151757d9.png)
