import React from 'react';
import TaskManagerTemplate from '../../components/templates/TaskManager';
import {DragDropContext} from 'react-beautiful-dnd';
import ColumnList from './components/ColumnList';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import onDragEnd from './helpers/onDragEnd';
import {useDispatch, useSelector} from 'react-redux';
import {setList} from '../../store/actions';
import useGlobalUserData from '../../hooks/useUsersData';


const TaskManagerPage = () => {

  const { listItems } = useSelector(state => state);
  const { isProjectManager } = useGlobalUserData();
  const dispatch = useDispatch();

  const handleDragEnd = event => {
    const { source, destination } = event;
    if(destination) {
      if(destination.droppableId === 'done'){
        const { userId } = listItems[source.droppableId][source.index];
        if(!isProjectManager(userId))
          return; // not allowed ;)
      }
      const newState = onDragEnd(event, listItems);
      dispatch(setList(newState));
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <TaskManagerTemplate
        header={<PageHeader/>}
        children={<ColumnList/>}
        footer={<PageFooter/>}
      />
    </DragDropContext>
  );
};

export default TaskManagerPage;
