import React from 'react';
import {AddItemForm, AddItemFormPropsType,} from "./AddItemForm";
import {Meta, Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "./Task";

export default {
    title: 'Task component',
    component: Task,
} as Meta;
const removeCallback = action('Remove callback was clicked')
const changeStatusCallback = action('Changestatus callback was clicked')
const changeTitleCallback = action('Changetitle callback was clicked')
const Template: Story<TaskPropsType> = (args) => <Task {...args} />;
const baseArgs = {
    changeTaskStatus: changeStatusCallback,
    changeTaskTitle: changeTitleCallback,
    removeTask: removeCallback
}

export const isNotCompletedTask = Template.bind({});
isNotCompletedTask.args = {
    todolistId: 'todolistId1',
    ...baseArgs,
    task: {id: '1',isDone:false , title: 'CSSS'}
};
export const CompletedTask = Template.bind({})
CompletedTask.args = {
    todolistId: 'todolistId1',
    ...baseArgs,
    task: {id: '1',isDone: true, title: 'JS'}
}